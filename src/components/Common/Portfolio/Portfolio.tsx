import { PortfolioProps } from './Portfolio.types'
import PorfolioCard from './PorfolioCard'
import { portfolioData } from './PorfolioData'

export default function Portfolio({ isFeatured, title, children }: PortfolioProps) {
  const portfolioItems = isFeatured ? portfolioData.slice(0, 4) : portfolioData
  return (
    <div className="ring-1 md:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2  md:grid lg:gap-0 md:items-center md:gap-12 md:grid-cols-none md:col-start-2 md:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
      <div>
        <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">{title}</p>
        {children}
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap -m-4">
          {portfolioItems.map(({ title, src, category, description, id, skills }) => (
            <PorfolioCard
              key={id}
              isFeatured={isFeatured}
              title={title}
              src={src}
              category={category}
              skills={skills as any}>
              <p className={`text-sm text-zinc-500 dark:text-zinc-400 ${isFeatured ? '' : 'h-48'}`}>{description}</p>
            </PorfolioCard>
          ))}
        </div>
      </div>
    </div>
  )
}
