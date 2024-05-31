import { cookies } from 'next/headers'

import { type CookieOptions, createServerClient } from '@supabase/ssr'

async function getSeverSession() {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options })
        },
      },
    }
  )
  return supabase
}

async function getSession() {
  const supabase = await getSeverSession()
  const { data } = await supabase.auth.getSession()
  return data.session
}

async function isUserAdmin() {
  const supabase = await getSeverSession()
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

export { getSeverSession, isUserAdmin }
