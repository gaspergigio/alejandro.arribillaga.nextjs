import React from 'react'
import { FullMessage, PostCard, Posts } from '@/components'
import { getPostList } from '../actions'
import CommingSoon from '@/assets/comming-soon.png'

//TODO: Avanzar aqui con la creacion de la pagina de blog tomada desde supabase

export default async function Page() {
  const blogList = await getPostList()
  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4">
          <div className="mt-24">
            <Posts
              title="My Blog"
              description={
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Explore my latest articles on programming, web development, and technology. Find quality technical
                  articles, tips, tutorials, and reflections here to help you keep your mind sharp and your skills up to
                  date in the world of software development.
                </p>
              }>
              {blogList &&
                blogList.map((post) => (
                  <PostCard
                    key={post.id}
                    title={post.title}
                    slug={post.slug}
                    imgSrc={post.thumb_path}
                    publishDate={new Date(post.published_date)}>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{post.preview}</p>
                  </PostCard>
                ))}
            </Posts>
            {blogList?.length === 0 && (
              <FullMessage
                imgSrc={CommingSoon.src}
                title="Comming Soon"
                description="In this page I will add some sample applications developed in my spare time for personal use. You can
                  use them if you wish."
              />
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
