import React from 'react'

export default function GotoMedium() {
  return (
    <section className="py-10 bg-primary sm:py-16 lg:py-20">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <h2 className="text-2xl text-white lg:max-w-xl">
            Loved what you read? You can also find this article on Medium for more great content and engagement. Check
            it out!
          </h2>
          <div className="sm:flex sm:justify-center lg:justify-end">
            <a
              href="https://medium.com/@alejandroarribillaga"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center aspect-square text-white shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-20 w-40">
              View on Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
