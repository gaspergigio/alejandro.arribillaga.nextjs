import { FadeUp } from '@/components'
import React from 'react'

export default function Testimonials({ t }: { t: (key: string) => string }) {
  return (
    <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-start lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
      <FadeUp y={50}>
        <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mb-10">
          {t('Home.Testimonials.Title')}
        </p>
      </FadeUp>
      <div className="md:grid gap-6 md:grid-cols-1">
        <FadeUp y={100}>
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Home.Testimonials.FirstTestimonial')}</p>
            <p className="text-xs mt-2 text-zinc-500">
              <span className="block text-xs">Damian Galletini</span>
              <span className="block text-xs">
                Enterprise Cloud Architect | Software Architecture | Technology Consultant
              </span>
            </p>
          </div>
        </FadeUp>
        <FadeUp y={150}>
          <div className="mt-4">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Home.Testimonials.SecondTestimonial')}</p>
            <p className="text-xs mt-2 text-zinc-500">
              <span className="block text-xs">Tatevik Harutyunyan</span>
              <span className="block text-xs"> Principal QA Engineer at Scalio</span>
            </p>
          </div>
        </FadeUp>
        <FadeUp y={200}>
          <div className="mt-4">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Home.Testimonials.ThirdTestimonial')}</p>
            <p className="text-xs mt-2 text-zinc-500">
              <span className="block text-xs">Gerardo Boiero Rovera</span>
              <span className="block text-xs"> Project Manager / Scrum Master</span>
            </p>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}
