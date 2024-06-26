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

async function getSession() {
  const supabase = getClient()
  const { data } = await supabase.auth.getSession()
  return data.session
}

async function isUserAdmin() {
  const supabase = await getClient()
  const session = await getSession()

  const { data } = await supabase
    .from('Rol')
    .select(
      `
    role_id,
    Entity!inner(name)
  `
    )
    .eq('user_id', session?.user.id)
    .eq('Entity.name', 'SuperAdmin')

  if (!data?.length) return false

  return data?.length > 0
}

function getClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export { signInOAuth, signOut, getSession, isUserAdmin }
