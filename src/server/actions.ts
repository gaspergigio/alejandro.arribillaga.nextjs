import { createBrowserClient } from '@supabase/ssr'

async function signInOAuth() {
  const supabase = getClient()
  await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo: 'http://localhost:3000/login/callback' },
  })
}

async function signOut() {
  const supabase = getClient()
  await supabase.auth.signOut()
}

async function getUser() {
  const supabase = getClient()
  const { data } = await supabase.auth.getUser()
  return data.user
}

async function isUserAdmin() {
  const supabase = await getClient()
  const user = await getUser()

  if (!user) return false

  const { data } = await supabase
    .from('Rol')
    .select(
      `
    role_id,
    Entity!inner(name)
  `
    )
    .eq('user_id', user.id)
    .eq('Entity.name', 'SuperAdmin')

  if (!data?.length) return false

  return data?.length > 0
}

function getClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

async function uploadFile(file: File) {
  const supabase = getClient()
  //get filename without extension
  const [fileName, extension] = file.name.split('.')
  //get timestamp in milliseconds
  const timestamp = new Date().getTime()
  const { data, error } = await supabase.storage
    .from('blog_bucket')
    .upload(`public/${fileName}.${timestamp}.${extension}`, file)
  if (error) {
    console.error('Error uploading file:', error)
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return `${(supabase as any).storageUrl}/object/public/${(data as any).fullPath}`
}

async function removeFile(fullUrl: string) {
  const supabase = getClient()
  const url = fullUrl.split('/blog_bucket/')[1]
  const { error } = await supabase.storage.from('blog_bucket').remove([url])

  if (error) {
    console.error('Error removing file:', error)
    return null
  }

  return true
}

export { signInOAuth, signOut, getUser, isUserAdmin, uploadFile, removeFile }
