import React from 'react'

import type { Metadata } from 'next'

import { FadeUp, Portfolio } from '@/components'
import { useTranslation } from '@/hooks'

export const metadata: Metadata = {
  title: 'Portfolio | Alejandro Arribillaga | FrontEnd Engineer',
  description:
    'Explora mi portfolio de proyectos FrontEnd. Desde aplicaciones web modernas hasta soluciones interactivas, descubre cómo mis habilidades y creatividad han dado vida a diversas ideas y retos.',
}

export default function Page() {
  const { t } = useTranslation()
  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4">
          <div className="mt-24">
            <Portfolio title={t('Portfolio.Title')} t={t}>
              <FadeUp y={100}>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                  {t('Portfolio.FirstParagraph')}
                  <br /> <br /> {t('Portfolio.SecondParagraph')}
                </p>
              </FadeUp>
            </Portfolio>
          </div>
        </div>
      </section>
    </main>
  )
}
