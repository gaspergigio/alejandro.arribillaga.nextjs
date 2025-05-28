/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import { cookies } from 'next/headers'

import { type CookieOptions, createServerClient } from '@supabase/ssr'

async function getServerSupabase() {
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

async function getServerUser() {
  const supabase = await getServerSupabase()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data.user) {
    // eslint-disable-next-line no-console
    console.warn('Invalid session cookie detected, clearing session cookie', error, !data.user)
    const cookieStore = cookies()
    const cookiesList = cookieStore.getAll()
    cookiesList.filter((x) => x.name.includes('-auth-token.')).forEach((x) => cookieStore.delete(x.name))
    return null
  }

  return data.user
}

async function isServerUserAdmin() {
  const user = await getServerUser()
  if (!user) return false

  const supabase = await getServerSupabase()

  const { data, error } = await supabase
    .from('Rol')
    .select(
      `
    role_id,
    Entity!inner(name)
  `
    )
    .eq('user_id', user.id)
    .eq('Entity.name', 'SuperAdmin')

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching user roles:', error)
    return false
  }

  return data?.length > 0
}

export { getServerSupabase, isServerUserAdmin, getServerUser }
