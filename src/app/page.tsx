import React from 'react'

import type { Metadata } from 'next'
import Link from 'next/link'

import {
  Home,
  About,
  FindMe,
  FindMeCopy,
  Resume,
  Education,
  Portfolio,
  Skills,
  Testimonials,
  Slogan,
  Posts,
  PostCard,
  FadeUp,
} from '@/components'
import { useTranslation } from '@/hooks'
import { getServerPostList } from './actions'

export const metadata: Metadata = {
  title: 'Alejandro Arribillaga | FrontEnd Engineer',
  description:
    'Bienvenido a la página personal de Alejandro Arribillaga, un experimentado FrontEnd Engineer con 17 años de experiencia. Descubre más sobre mis habilidades, proyectos y experiencia profesional.',
}

export default async function Page() {
  const blogList = await getServerPostList(3)
  const translations = useTranslation()
  const { t, locale } = translations

  return (
    <main>
      <Home>
        <About {...translations} />
        <FindMe {...translations}>
          <FindMeCopy />
        </FindMe>
        <Portfolio title={t('Home.Portfolio.Title')} isFeatured t={t}>
          <FadeUp y={100}>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              {t('Home.Portfolio.FirstParagraph')}
              <Link className="hover:text-opacity-80 focus:text-opacity-80 text-white font-semibold" href="/portfolio">
                {t('Home.Portfolio.GoTo')}
              </Link>
              <br /> <br />
              {t('Home.Portfolio.SecondParagraph')}
            </p>
          </FadeUp>
        </Portfolio>
        <Resume {...translations} />
        <Education {...translations} />
        <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
          <Posts
            title={t('Home.Posts.Title')}
            isFeatured
            description={
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                {t('Home.Posts.Paragraph')}
                <Link className="hover:text-opacity-80 focus:text-opacity-80 text-white font-semibold" href="/blog">
                  {t('Home.Posts.GoTo')}
                </Link>
              </p>
            }>
            {blogList.data &&
              blogList.data.map((post) => (
                <PostCard
                  key={post.id}
                  isFeatured
                  title={locale === 'es' ? post.title : post.en_title}
                  slug={post.slug}
                  imgSrc={post.thumb_path}
                  publishDate={new Date(post.published_date)}>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {locale === 'es' ? post.preview : post.en_preview}
                  </p>
                </PostCard>
              ))}
          </Posts>
        </div>

        <Skills {...translations} />
        <Slogan text={t('Home.Slogan')} />
        <Testimonials {...translations} />
      </Home>
    </main>
  )
}
