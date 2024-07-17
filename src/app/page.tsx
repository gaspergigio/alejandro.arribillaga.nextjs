import React from 'react'

import type { Metadata } from 'next'
import Link from 'next/link'

import TechImage from '@/assets/technology/JavascriptLogo.png'
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
} from '@/components'
import { useTranslation } from '@/hooks'

export const metadata: Metadata = {
  title: 'Alejandro Arribillaga | FrontEnd Engineer',
  description:
    'Bienvenido a la página personal de Alejandro Arribillaga, un experimentado FrontEnd Engineer con 17 años de experiencia. Descubre más sobre mis habilidades, proyectos y experiencia profesional.',
}

export default function Page() {
  const translations = useTranslation()
  const { t } = translations
  return (
    <main>
      <Home>
        <About {...translations} />
        <FindMe {...translations}>
          <FindMeCopy />
        </FindMe>
        <Portfolio title={t('Home.Portfolio.Title')} isFeatured>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            {t('Home.Portfolio.FirstParagraph')}
            <Link className="hover:text-opacity-80 focus:text-opacity-80 text-white font-semibold" href="/portfolio">
              {t('Home.Portfolio.GoTo')}
            </Link>
            <br /> <br />
            {t('Home.Portfolio.SecondParagraph')}
          </p>
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
            <PostCard
              title="Meet AutoManage, the best AI management tools"
              slug="meet-automanage-the-best-ai-management-tools"
              imgSrc={TechImage.src}
              publishDate={new Date()}>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </PostCard>
            <PostCard
              title=" How to earn more money as a wellness coach"
              slug="how-to-earn-more-money-as-a-wellness-coach"
              imgSrc={TechImage.src}
              publishDate={new Date()}>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </PostCard>
            <PostCard
              title=" How to earn more money as a wellness coach"
              slug="how-to-earn-more-money-as-a-wellness-coach-2"
              imgSrc={TechImage.src}
              publishDate={new Date()}>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </PostCard>
          </Posts>
        </div>

        <Skills {...translations} />
        <Slogan text={t('Home.Slogan')} />
        <Testimonials {...translations} />
      </Home>
    </main>
  )
}
