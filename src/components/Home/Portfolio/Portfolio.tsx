import Basemintgang from '@/assets/portfolio/basemintgang.thumb.webp'
import Wedplanco from '@/assets/portfolio/wedplanco.thumb.png'
import Geopop from '@/assets/portfolio/geopop.thumb.png'
import Scalio from '@/assets/portfolio/scalio-thumb.jpg'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <div className="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
      <div>
        <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">Noteworthy Works</p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          Explore some of my most notable works. Read more in my
          <a className="hover:text-gray-200 text-white font-semibold" href="#">
            {` Portfolio`}
          </a>
          <br /> <br />
          Explore my portfolio—a blend of 17 years of software development expertise. With 14 years spent mastering
          full-stack development and the last 3 dedicated solely to frontend, each project tells a story of innovation
          and design. Experience the evolution from backend intricacies to captivating frontend interfaces, where
          technical expertise meets visionary design.
        </p>
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/2 md:w-1/1 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Wedplanco.src}
                alt="content"
                width={1440}
                height={906}
              />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">PRODUCT</h3>
              <h2 className="text-lg text-white font-semibold title-font mb-4">The Wedding Planning CO</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                I contributed as a FrontEnd Engineer to the wedding planning platform, aiding in crafting a unique and
                personalized digital experience for users.
              </p>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/1 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Scalio.src}
                alt="content"
                width={1200}
                height={603}
              />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SSR</h3>
              <h2 className="text-lg text-white font-semibold title-font mb-4">Scalio Website</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                I worked as a FrontEnd Developer on Scalio's institutional website, built using Next.js, contributing to
                its development and optimization.
              </p>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/1 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Geopop.src}
                alt="content"
                width={1354}
                height={870}
              />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SAAS</h3>
              <h2 className="text-lg text-white font-semibold title-font mb-4">Geopop</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                I've worked as a FullStack Engineer for 5 years at Geopop, a human resources outsourcing platform
                operating in Argentina, Chile, and Peru. I have been a technical leader for 3 year, here.
              </p>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/1 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Basemintgang.src}
                alt="content"
                width={828}
                height={488}
              />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">CRIPTO</h3>
              <h2 className="text-lg text-white font-semibold title-font mb-4">Basemint Gang</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                I collaborated as a FrontEnd Engineer on a crypto marketplace within an application that combined
                Angular and React, contributing to its development and functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
