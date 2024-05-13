import { PostCard } from '@/components'
import Link from 'next/link'
import { PostsProps } from './Posts.types'

export default function Posts({ title, description, children }: PostsProps) {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
      <div className="mt-8">
        <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">{title}</p>
        {description}
      </div>
      <section className="pt-4 lg:pt-10 lg:pb-8 dark:ring-white/10">
        <div className="mx-auto">
          <div className="flex flex-wrap -mx-8">{children}</div>
        </div>
      </section>
    </div>
  )
}
