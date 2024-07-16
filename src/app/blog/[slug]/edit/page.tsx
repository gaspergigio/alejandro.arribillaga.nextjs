import React from 'react'
import { BlogForm } from '@/components'
import { getBlogStatus, getPostBySlug, isServerUserAdmin } from '@/app/actions'
import { redirect } from 'next/navigation'

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug as string
  const post = await getPostBySlug(slug)
  const blogStatus = await getBlogStatus()
  const isUserAdmin = await isServerUserAdmin()
  if (!isUserAdmin) redirect('/')
  if (post === null) redirect('/blog')

  return (
    <section>
      <div className="flex flex-col items-center p-4">
        <div className="w-3/4 mt-20 h-full">
          <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-center shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white dark:bg-secondary">
            <div className="w-full">
              <p className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl">Blog</p>
              <p className="mt-4 mb-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
                Edit a Post
              </p>
            </div>
            <BlogForm statusList={blogStatus ?? []} post={post} />
          </div>
        </div>
      </div>
    </section>
  )
}
