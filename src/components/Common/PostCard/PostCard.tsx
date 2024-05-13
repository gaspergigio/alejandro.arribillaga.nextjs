import React from 'react'
import { format } from 'date-fns'
import { PostCardProps } from './PostCard.types'
import Link from 'next/link'

export default function PostCard({ isFeatured, imgSrc, publishDate, title, slug, children }: PostCardProps) {
  const cardWidth = isFeatured ? 'w-full' : 'xl:w-1/4 lg:w-1/3 md:w-1/2'
  return (
    <Link href={`/blog/${slug}`} className={`${cardWidth} px-4 mb-8`}>
      <div className="w-full mb-10">
        {!isFeatured && (
          <div className="mb-8 overflow-hidden rounded">
            <img src={imgSrc} alt="" className="w-full" />
          </div>
        )}
        <div>
          <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-black rounded bg-white">
            {format(publishDate, 'MMM dd, yyyy')}
          </span>
          <h3>
            <span className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </span>
          </h3>
          {/*           <p className="text-base text-zinc-500 dark:text-zinc-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p> */}
          {children}
        </div>
      </div>
    </Link>
  )
}
