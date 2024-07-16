import React from 'react'
import { Portfolio } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Alejandro Arribillaga | FrontEnd Engineer',
  description:
    'Explora mi portfolio de proyectos FrontEnd. Desde aplicaciones web modernas hasta soluciones interactivas, descubre cómo mis habilidades y creatividad han dado vida a diversas ideas y retos.',
}

export default function Page() {
  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4">
          <div className="mt-24">
            <Portfolio title="Explore My Portfolio">
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                Discover my Portfolio showcasing a blend of frontend and fullstack projects. From dynamic web
                applications to elegant user interfaces, each project represents my dedication to crafting impactful
                digital experiences. Explore how I leverage my expertise in frontend development and fullstack knowledge
                to deliver innovative solutions that resonate with users and drive business success.
                <br /> <br />{' '}
                {`On this page, I'm only showcasing relevant and more recent projects. Many other projects
                have been left out of the enumerated list displayed here.`}
              </p>
            </Portfolio>
          </div>
        </div>
      </section>
    </main>
  )
}
