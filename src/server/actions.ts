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

function getClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

async function getSession() {
  const supabase = getClient()
  const { data } = await supabase.auth.getSession()
  return data
}

export { signInOAuth, signOut, getSession }
