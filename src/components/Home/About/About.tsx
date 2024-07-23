import React from 'react'

import Image from 'next/image'

import ProfileImg from '@/assets/profile.webp'
import { FadeUp } from '@/components'

export default function About({ t }: { t: (key: string) => string }) {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
      <FadeUp y={50}>
        <div className="relative flex items-center gap-x-4">
          <Image
            alt="my profile"
            className="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
            src={ProfileImg.src}
            width={40}
            height={40}
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-primary dark:text-white">
              <a href="#">
                <span className="absolute inset-0" />
                Alejandro Arribillaga
              </a>
            </p>
            <p className="text-zinc-500 dark:text-zinc-400">Frontend Engineer</p>
          </div>
        </div>
      </FadeUp>
      <FadeUp y={100}>
        <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
          {t('Home.About.Title')}
        </p>
      </FadeUp>
      <FadeUp y={150}>
        <p className="mt-4 text-lg tracking-tight font-medium text-primary dark:text-white md:text-2xl">
          {t('Home.About.FirstParagraph')}
          <br /> <br />
          {t('Home.About.SecondParagraph')}
        </p>
      </FadeUp>
    </div>
  )
}
