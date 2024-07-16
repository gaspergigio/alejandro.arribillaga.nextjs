import React from 'react'
import { DetailHero, BackBlog, GotoMedium } from '@/components'
import { getPostBySlug } from '@/app/actions'
import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_HOST as string

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug as string
  const post = await getPostBySlug(slug)

  const title = `${post?.seo_title} | Alejandro Arribillaga | FrontEnd Engineer`
  const description = post?.seo_description ?? ''
  const metadata: Metadata = {
    authors: [{ name: 'Alejandro Arribillaga' }],
    title,
    description,
    openGraph: {
      siteName: 'Alejandro Arribillaga | FrontEnd Engineer',
      url: `${baseUrl}/blog/${slug}`,
      images: [
        {
          url: post?.thumb_path ?? '',
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
  }
  return metadata
}

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug as string
  const post = await getPostBySlug(slug)
  return (
    <>
      {post && (
        <DetailHero imgSrc={post.img_path} title={post.title}>
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
