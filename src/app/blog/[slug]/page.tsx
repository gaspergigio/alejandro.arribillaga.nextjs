import React from 'react'
import { DetailHero, BackBlog, GotoMedium } from '@/components'
import { getPostBySlug } from '@/app/actions'

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug as string
  const post = await getPostBySlug(slug)
  return (
    <>
      {post && (
        <DetailHero imgSrc={post.thumb_path} title={post.title}>
          {post.seo_description ?? ''}
        </DetailHero>
      )}
      <section className="py-10 bg-white sm:py-16 lg:py-20">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="postContent" dangerouslySetInnerHTML={{ __html: post?.content ?? '' }}></div>
        </div>
        <BackBlog />
      </section>
      {/*TODO: if post.medium_url exists redirect. Otherwise redirecto to my medium profile.*/}
      <GotoMedium />
    </>
  )
}
