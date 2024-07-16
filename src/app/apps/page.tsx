import React from 'react'

import CommingSoon from '@/assets/comming-soon.png'
import { FullMessage } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apps | Alejandro Arribillaga | FrontEnd Engineer',
  description:
    'Conoce las aplicaciones que he desarrollado. Desde herramientas útiles hasta experiencias interactivas, explora cómo mis aplicaciones pueden hacer tu vida más fácil y entretenida.',
}

export default function Page() {
  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4 extend-height">
          <div className="grid md:grid-cols-2 gap-6"></div>
          <FullMessage
            imgSrc={CommingSoon.src}
            title="Comming Soon"
            description="In this page I will add some sample applications developed in my spare time for personal use. You can
                  use them if you wish."
          />
        </div>
      </section>
    </main>
  )
}
