'use client'
import React, { useState } from 'react'

import { PostCard, Posts } from '@/components'
import { getClientPostList } from '@/server'
import { PAGE_SIZE } from '@/server/types'

import { IBlogListClient } from './BlogListClient.types'
/* import { CircularProgress } from '@nextui-org/react' */

export default function BlogListClient({
  data,
  total,
  children,
  title,
  description,
  loadMoreText,
  locale,
}: IBlogListClient) {
  const [blog, setBlog] = useState(data ?? [])
  const [isLoading, setLoading] = useState(false)

  const handleLoadMore = () => {
    //en base a la cantidad de posts en blog y con Page_Size se calcula el siguiente rango
    const pageNumber = Math.floor(blog.length / PAGE_SIZE) + 1
    setLoading(true)
    getClientPostList(pageNumber).then((morePosts) => {
      setBlog((posts) => [...posts, ...(morePosts.data ?? [])])
      setLoading(false)
    })
  }

  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
      <Posts
        title={title}
        description={<p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">{description}</p>}>
        {blog &&
          blog.map((post) => (
            <PostCard
              key={post.id}
              title={locale === 'es' ? post.title : post.en_title}
              slug={post.slug}
              imgSrc={post.thumb_path}
              publishDate={new Date(post.published_date)}>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {locale === 'es' ? post.preview : post.en_preview}
              </p>
            </PostCard>
          ))}
      </Posts>
      {/* TODO: Cuando se haga la paginacion debo agregar el siguiente codigo */}
      {/*           {!isFeatured && (
              <div className="flex justify-center">
                <CircularProgress color="default" aria-label="Loading..." />
              </div>
            )} */}
      {children}
      {blog.length < total && (
        <div className="flex justify-center">
          <button
            disabled={isLoading}
            className="text-sm py-2 w-1/4 px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
            onClick={handleLoadMore}>
            {loadMoreText}
          </button>
        </div>
      )}
    </div>
  )
}
