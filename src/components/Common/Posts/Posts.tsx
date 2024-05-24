import Link from 'next/link'
import { PostsProps } from './Posts.types'
import React from 'react'
import { Tooltip } from '@nextui-org/tooltip'
import { IconPlus } from '@tabler/icons-react'
import { CircularProgress } from '@nextui-org/react'

export default function Posts({ isFeatured, title, description, children }: PostsProps) {
  const modifiedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child as any, { isFeatured: isFeatured })
  })
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
      <div>
        <div className="flex gap-4 ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
          <p>{title}</p>
          <Tooltip content="New Post" color="primary">
            <Link
              href={`/blog/create`}
              className="flex mt-2 items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12">
              {<IconPlus color="white" strokeWidth={0.8} />}
            </Link>
          </Tooltip>
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
