import React from 'react'

import { BlogAddButton } from '@/components'

import { PostsProps } from './Posts.types'

export default function Posts({ isFeatured, title, description, children }: PostsProps) {
  const modifiedChildren = React.Children.map(React.Children.toArray(children), (child) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.cloneElement(child as any, { isFeatured: isFeatured })
  })

  return (
    <>
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
        </div>
      </section>
    </>
  )
}
