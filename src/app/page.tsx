import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: 'Alejandro Arribillaga | FrontEnd Engineer',
  description:
    'Bienvenido a la página personal de Alejandro Arribillaga, un experimentado FrontEnd Engineer con 17 años de experiencia. Descubre más sobre mis habilidades, proyectos y experiencia profesional.',
}

export default function Page() {
  return (
    <main>
      <Home>
        <About />
        <FindMe>
          <FindMeCopy />
        </FindMe>
        <Portfolio title="Noteworthy Works" isFeatured>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Explore some of my most notable works. Read more in my
            <Link className="hover:text-opacity-80 focus:text-opacity-80 text-white font-semibold" href="/portfolio">
              {` Portfolio`}
            </Link>
            <br /> <br />
            Explore my portfolio—a blend of 17 years of software development expertise. With 14 years spent mastering
            full-stack development and the last 3 dedicated solely to frontend, each project tells a story of innovation
            and design. Experience the evolution from backend intricacies to captivating frontend interfaces, where
            technical expertise meets visionary design.
          </p>
        </Portfolio>
        <Resume />
        <Education />
        <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
          <Posts
            title="My latest Posts"
            isFeatured
            description={
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                Explore my latest articles on programming, web development, and technology. Find quality technical
                articles, tips, tutorials, and reflections here to help you keep your mind sharp and your skills up to
                date in the world of software development. Read more in my
                <Link className="hover:text-opacity-80 focus:text-opacity-80 text-white font-semibold" href="/blog">
                  {` Blog`}
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

        <Skills />
        <Slogan />
        <Testimonials />
      </Home>
    </main>
  )
}
