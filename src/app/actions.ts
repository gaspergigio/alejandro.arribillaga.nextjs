/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import { cookies } from 'next/headers'

import { type CookieOptions, createServerClient } from '@supabase/ssr'
import IPost from '@/server/types'

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
    console.error('Error fetching user roles:', error)
    return false
  }

  return data?.length > 0
}

async function getBlogStatusType() {
  const supabase = await getServerSupabase()
  const { data, error } = await supabase.from('EntityType').select('id').eq('name', 'Blog Status')

  if (error) {
    console.error('Error fetching EntityType data:', error)
    return null
  }

  if (!data || data.length === 0) {
    console.log('No EntityType found with name "Blog Status"')
    return null
  }

  return data[0].id
}

async function getBlogStatus() {
  const supabase = await getServerSupabase()
  const blogStatusId = await getBlogStatusType()

  const { data, error } = await supabase
    .from('Entity')
    .select(
      `
    id,
    name
  `
    )
    .eq('entity_type_id', blogStatusId)

  if (error) {
    console.error('Error fetching data:', error)
    return null
  }

  if (!data) return data

  return data.map((x) => ({
    text: x.name,
    value: x.id,
  }))
}

async function getPostList() {
  const supabase = await getServerSupabase()

  //where published_date es menor a la fecha actual
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

  if (error) {
    console.error('Error fetching data:', error)
    return null
  }

  return data as IPost[]
}

export { getServerSupabase, isServerUserAdmin, getServerUser, getBlogStatus, getPostList }
