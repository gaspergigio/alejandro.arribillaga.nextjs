'use client'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { IconEdit } from '@tabler/icons-react'

import { Tooltip } from '@nextui-org/tooltip'

import { PostCardProps } from './PostCard.types'

export default function PostCard({ isFeatured, imgSrc, publishDate, title, slug, children }: PostCardProps) {
  const cardWidth = isFeatured ? 'w-full' : 'xl:w-1/4 lg:w-1/3 md:w-1/2'
  const router = useRouter()
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.push(`/blog/${slug}/edit`)
    event.stopPropagation()
  }

  return (
    <Link href={`/blog/${slug}`} className={`${cardWidth} px-4 mb-8`}>
      <div className="flex flex-col h-full border border-gray-400 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
        {!isFeatured && (
          <div className="mb-8 overflow-hidden rounded w-24 h-24 mx-auto">
            {imgSrc && (
              <Image
                alt="post card image"
                className="w-full h-full object-cover"
                src={imgSrc}
                width={320}
                height={320}
              />
            )}
          </div>
        )}
        <div>
          <div className="flex flex-row justify-between">
            <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-black rounded bg-white">
              {format(publishDate, 'MMM dd, yyyy')}
            </span>
            <Tooltip content="Edit Post" color="primary">
              <button
                onClick={handleOnClick}
                className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-6 w-6">
                {<IconEdit color="white" strokeWidth={0.8} />}
              </button>
            </Tooltip>
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
