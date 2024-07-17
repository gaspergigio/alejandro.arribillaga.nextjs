import React from 'react'

export default function Testimonials({ t }: { t: (key: string) => string }) {
  return (
    <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-evenly lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
      <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl">
        {t('Home.Testimonials.Title')}
      </p>
      <div className="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1">
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Home.Testimonials.FirstTestimonial')}</p>
          <p className="text-xs mt-2 text-zinc-500">
            <span className="block text-xs">Damian Galletini</span>
            <span className="block text-xs">
              Enterprise Cloud Architect | Software Architecture | Technology Consultant
            </span>
          </p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Home.Testimonials.SecondTestimonial')}</p>
          <p className="text-xs mt-2 text-zinc-500">
            <span className="block text-xs">Tatevik Harutyunyan</span>
            <span className="block text-xs"> Principal QA Engineer at Scalio</span>
          </p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Home.Testimonials.ThirdTestimonial')}</p>
          <p className="text-xs mt-2 text-zinc-500">
            <span className="block text-xs">Gerardo Boiero Rovera</span>
            <span className="block text-xs"> Project Manager / Scrum Master</span>
          </p>
        </div>
      </div>
    </div>
  )
}
