import React from 'react'
import { format } from 'date-fns'
import Link from 'next/link'

import { BlogEditButton } from '@/components'

import { PostCardProps } from './PostCard.types'

export default function PostCard({ isFeatured, imgSrc, publishDate, title, slug, children }: PostCardProps) {
  const cardWidth = isFeatured ? 'w-full' : 'xl:w-1/4 lg:w-1/3 md:w-1/2'

  return (
    <Link href={`/blog/${slug}`} className={`${cardWidth} px-4 mb-8`}>
      <div className="flex flex-col h-full border border-gray-400 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
        {!isFeatured && (
          <div className="mb-8 overflow-hidden rounded w-24 h-24 mx-auto">
            {imgSrc && (
              <img alt="post card image" className="w-full h-full object-cover" src={imgSrc} width={320} height={320} />
            )}
          </div>
        )}
        <div>
          <div className="flex flex-row justify-between">
            <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-black rounded bg-white">
              {format(publishDate, 'MMM dd, yyyy')}
            </span>
            <BlogEditButton slug={slug} />
          </div>

          <h3>
            <span className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </span>
          </h3>
          {children}
        </div>
      </div>
    </Link>
  )
}
