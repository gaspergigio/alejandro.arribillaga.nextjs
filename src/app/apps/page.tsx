import React from 'react'

import { Metadata } from 'next'

import CommingSoon from '@/assets/comming-soon.png'
import { FullMessage } from '@/components'
import { useTranslation } from '@/hooks'

export const metadata: Metadata = {
  title: 'Apps | Alejandro Arribillaga | FrontEnd Engineer',
  description:
    'Conoce las aplicaciones que he desarrollado. Desde herramientas útiles hasta experiencias interactivas, explora cómo mis aplicaciones pueden hacer tu vida más fácil y entretenida.',
}

export default function Page() {
  const { t } = useTranslation()
  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4 extend-height">
          <div className="grid md:grid-cols-2 gap-6"></div>
          <FullMessage imgSrc={CommingSoon.src} title={t('Apps.NoApps')} description={t('Apps.NoAppsDescription')} />
        </div>
      </section>
    </main>
  )
}
