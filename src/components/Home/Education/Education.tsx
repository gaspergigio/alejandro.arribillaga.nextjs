import { FadeX } from '@/components'
import React from 'react'

export default function Education({ t }: { t: (key: string) => string }) {
  return (
    <div className="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
      <FadeX x={-50}>
        <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
          {t('Home.Education.Title')}
        </p>
      </FadeX>
      <FadeX x={-100}>
        <ul>
          <li className="text-sm text-zinc-500 dark:text-zinc-400 mt-8">
            {t('Home.Education.FirstList1')} <span className="font-bold  text-white">Software engineer</span>
            {t('Home.Education.FirstList2')}
            <span className="font-bold  text-white">Universidad Tecnologica Nacional.</span>
          </li>
          <li className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
            {t('Home.Education.SecondList1')} <span className="font-bold  text-white">MBA</span>
            {t('Home.Education.SecondList2')}
            <span className="font-bold  text-white">Universidad Siglo 21</span>
            {t('Home.Education.SecondList3')}
          </li>
          <li className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">{t('Home.Education.ThirdList')}</li>
          <li className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
            {t('Home.Education.FourthList1')}
            <span className="font-bold  text-white">{t('Home.Education.FourthList2')}</span>
            {t('Home.Education.FourthList3')}
          </li>
        </ul>
      </FadeX>
    </div>
  )
}
