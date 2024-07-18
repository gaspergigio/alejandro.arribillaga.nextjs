import React from 'react'

import { Tooltip } from '@nextui-org/tooltip'

import { skillsData } from './SkillsData'
import { FadeUp } from '@/components'

export default function Skills({ t }: { t: (key: string) => string }) {
  return (
    <div className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
      <div className="w-full">
        <FadeUp y={50}>
          <p className="text-xl text-primary dark:text-white lg:text-7xl tracking-tight">{t('Home.Skills.Title')}</p>
        </FadeUp>
        <FadeUp y={100}>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
            {t('Home.Skills.Paragraph')}
          </p>
        </FadeUp>
      </div>
      <FadeUp y={150}>
        <div className="grid mt-8 grid-cols-6 lg:grid-cols-6 xl:grid-cols-12 gap-y-4 gap-4 justify-center w-full">
          {skillsData.map(({ name, url, icon: Icon }) => (
            <Tooltip key={name} content={name} color="primary">
              <a
                href={url}
                target="_blank"
                aria-label={name}
                className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-10 w-10"
                rel="noreferrer">
                {<Icon color="white" strokeWidth={0.8} />}
              </a>
            </Tooltip>
          ))}
        </div>
      </FadeUp>
    </div>
  )
}
