export default function LastestPosts() {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
      <div className="mt-8">
        <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
          My latest Posts
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
          Explore my latest articles on programming, web development, and technology. Find quality technical articles,
          tips, tutorials, and reflections here to help you keep your mind sharp and your skills up to date in the world
          of software development. Read more in my
          <a className="hover:text-gray-200 text-white font-semibold" href="#">
            {` Blog`}
          </a>
        </p>
      </div>
      <section className="pt-4 lg:pt-10 lg:pb-8 dark:ring-white/10">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-8">
            <div className="w-full px-4">
              <div className="w-full mb-10">
                <div>
                  <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-black rounded bg-white">
                    May 22, 2024
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Meet AutoManage, the best AI management tools
                    </a>
                  </h3>
                  <p className="text-base text-zinc-500 dark:text-zinc-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="w-full mb-10">
                <div>
                  <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-black rounded bg-white">
                    Mar 15, 2024
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white  sm:text-2xl lg:text-xl xl:text-2xl">
                      How to earn more money as a wellness coach
                    </a>
                  </h3>
                  <p className="text-base text-zinc-500 dark:text-zinc-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="w-full mb-10">
                <div>
                  <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-black rounded bg-white">
                    Feb 07, 2024
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white  sm:text-2xl lg:text-xl xl:text-2xl">
                      How to earn more money as a wellness coach
                    </a>
                  </h3>
                  <p className="text-base text-zinc-500 dark:text-zinc-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
