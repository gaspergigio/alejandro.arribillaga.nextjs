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
  FadeUp,
} from '@/components'
import { useTranslation } from '@/hooks'

export const metadata: Metadata = {
  title: 'Alejandro Arribillaga | FrontEnd Engineer',
  description:
    'Bienvenido a la página personal de Alejandro Arribillaga, un experimentado FrontEnd Engineer con 17 años de experiencia. Descubre más sobre mis habilidades, proyectos y experiencia profesional.',
}

export default async function Page() {
  const translations = useTranslation()
  const { t } = translations

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
          <FadeUp y={50}>
            <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
              {t('Home.Apps.Title')}
            </p>
          </FadeUp>
          <FadeUp y={100}>
            <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              {t('Home.Apps.Paragraph1')}
              <br /> <br />
              {t('Home.Apps.Paragraph2')}
              <br /> <br />
              {t('Home.Apps.Paragraph3')}
              <br /> <br />
              {t('Home.Apps.Paragraph4')}
              <br /> <br />
              <ul>
                <li className="list-disc ml-4">{t('Home.Apps.Item1')}</li>
                <li className="list-disc ml-4">{t('Home.Apps.Item2')}</li>
                <li className="list-disc ml-4">{t('Home.Apps.Item3')}</li>
                <li className="list-disc ml-4">{t('Home.Apps.Item4')}</li>
                <li className="list-disc ml-4">{t('Home.Apps.Item5')}</li>
                <li className="list-disc ml-4">{t('Home.Apps.Item6')}</li>
                <li className="list-disc ml-4">{t('Home.Apps.Item7')}</li>
              </ul>
            </div>
          </FadeUp>
        </div>

        <Skills {...translations} />
        <Slogan text={t('Home.Slogan')} />
        <Testimonials {...translations} />
      </Home>
    </main>
  )
}
