import { createBrowserClient } from '@supabase/ssr'

import IPost, { IPostList, PAGE_SIZE } from './types'

async function signInWithEmail(email: string, password: string) {
  const supabase = getClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('Login error:', error)
    return { user: null, error }
  }

  return { user: data.user, error: null }
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
    .from('User_Permissions')
    .select(
      `
      permission_id,
      Permissions!inner(name)
    `
    )
    .eq('user_id', user.id)
    .eq('Permissions.name', 'admin')

  if (!data?.length) return false

  return data?.length > 0
}

function getClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

async function uploadFile(file: File) {
  const supabase = getClient()
  //get filename without extension
  const lastIndex = file.name.lastIndexOf('.')
  const fileName = file.name.substring(0, lastIndex)
  const extension = file.name.substring(lastIndex + 1)
  //get timestamp in milliseconds
  const timestamp = new Date().getTime()
  const { data, error } = await supabase.storage
    .from('blog_bucket')
    .upload(`public/${fileName}.${timestamp}.${extension}`, file)
  if (error) {
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    console.error('Error removing file:', error)
    return null
  }

  return true
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function savePost(postData: any) {
  const supabase = getClient()
  const { error } = await supabase.from('Blog').upsert([postData])

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error inserting into Supabase', error)
    return false
  }
  return true
}

async function getClientPostList(pageNumber: number) {
  const supabase = getClient()
  return getPostList(supabase, pageNumber)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getPostList(supabase: any, pageNumber: number, pageSize?: number): Promise<IPostList> {
  const size = pageSize ?? PAGE_SIZE
  const from = (pageNumber - 1) * size
  const to = from + size - 1

  const { data, error } = await supabase
    .from('Blog')
    .select(
      `
      *,
      Entity:status_id (name)
    `
    )
    .lte('published_date', new Date().toISOString())
    .order('published_date', { ascending: false })
    .range(from, to)

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error)
    return { data: null, total: 0 }
  }

  const { count, error: countError } = await supabase
    .from('Blog')
    .select('id', { count: 'exact', head: true })
    .lte('published_date', new Date().toISOString())

  if (countError) {
    // eslint-disable-next-line no-console
    console.error('Error fetching total count:', countError)
    return { data: null, total: 0 }
  }

  return { data: data as IPost[], total: count }
}

async function updateUserPassword(newPassword: string) {
  const supabase = getClient()
  try {
    // Supabase's updateUser with just the new password
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (error) {
      console.error('Password update error:', error)
      return { error }
    }

    return { error: null }
  } catch (error: unknown) {
    const err = error as { message?: string }
    console.error('Password update exception:', err)
    return { error: { message: err.message || 'Unknown error occurred' } }
  }
}

export {
  signInWithEmail,
  signOut,
  getUser,
  isUserAdmin,
  uploadFile,
  removeFile,
  savePost,
  getPostList,
  getClientPostList,
  updateUserPassword,
}
