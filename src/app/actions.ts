/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import { cookies } from 'next/headers'

import { getPostList } from '@/server/actions'
import IPost from '@/server/types'
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

async function getBlogStatusType() {
  const supabase = await getServerSupabase()
  const { data, error } = await supabase.from('EntityType').select('id').eq('name', 'Blog Status')

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching EntityType data:', error)
    return null
  }

  if (!data || data.length === 0) {
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error)
    return null
  }

  if (!data) return data

  return data.map((x) => ({
    text: x.name,
    value: x.id,
  }))
}

async function getServerPostList() {
  const supabase = await getServerSupabase()
  return getPostList(supabase, 1)
}

async function getPostBySlug(slug: string) {
  const supabase = await getServerSupabase()

  const { data, error } = await supabase
    .from('Blog')
    .select(
      `
      *,
      Entity:status_id (name)
    `
    )
    .eq('slug', slug)

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error)
    return null
  }

  const list = data as IPost[]
  return list.length > 0 ? list[0] : undefined
}

export { getServerSupabase, isServerUserAdmin, getServerUser, getBlogStatus, getServerPostList, getPostBySlug }
