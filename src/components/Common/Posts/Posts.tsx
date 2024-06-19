import React from 'react'
import { BlogAddButton } from '@/components'
import { CircularProgress } from '@nextui-org/react'

import { PostsProps } from './Posts.types'

export default function Posts({ isFeatured, title, description, children }: PostsProps) {
  const modifiedChildren = React.Children.map(children, (child) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.cloneElement(child as any, { isFeatured: isFeatured })
  })
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
      <div>
        <div className="flex gap-4 ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
          <p>{title}</p>
          <BlogAddButton />
        </div>
        {description}
      </div>
      <section className="pt-4 lg:pt-10 lg:pb-8 dark:ring-white/10">
        <div className={`${isFeatured ? 'container' : ''} mx-auto`}>
          <div className="flex flex-wrap -mx-8">{modifiedChildren}</div>
          {!isFeatured && (
            <div className="flex justify-center">
              <CircularProgress color="default" aria-label="Loading..." />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
