import React from 'react'

import CommingSoon from '@/assets/comming-soon.png'
import { FullMessage } from '@/components'
import { useTranslation } from '@/hooks'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <main className="min-h-[calc(100vh-121px)]">
      <section>
        <div className="px-4 xl:px-20 py-4 flex items-center justify-center">
          <FullMessage imgSrc={CommingSoon.src} title={t('NotFound.Title')} description={t('NotFound.Description')} />
        </div>
      </section>
    </main>
  )
}
