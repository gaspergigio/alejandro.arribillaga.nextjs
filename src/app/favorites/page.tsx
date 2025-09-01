import { FindMeCopy } from '@/components'
import React from 'react'
import { IconStarFilled } from '@tabler/icons-react'

export default function Page() {
  const ciudadaniaPass: string = process.env.NEXT_PUBLIC_CIUDADANIA_PASS ?? ''
  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4 extend-height">
          <div className="mt-24 grid grid-cols-1">
            <h2 className="text-6xl text-white font-semibold title-font mb-4 flex items-center gap-2">
              <IconStarFilled size={48} /> Favoritos
            </h2>
            <h3 className="text-2xl text-white font-semibold title-font mb-4">Ciudadania Italiana</h3>
          </div>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Usuario
              </label>
              <div className="flex gap-x-3">
                <input
                  readOnly
                  type="text"
                  name="user"
                  id="user"
                  value="alejandro.arribillaga@gmail.com"
                  className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="alejandro.arribillaga@gmail.com"
                />
                <FindMeCopy text="alejandro.arribillaga@gmail.com" message="User copied!" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <div className="flex gap-x-3">
                <input
                  readOnly
                  type="password"
                  name="password"
                  id="password"
                  value="********"
                  className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="********"
                />
                <FindMeCopy text={ciudadaniaPass} message="Password copied!" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Domicilio
              </label>
              <div className="flex gap-x-3">
                <input
                  readOnly
                  type="text"
                  name="address"
                  id="address"
                  value="Lote 17 Mza 295 S/N San Alfonso del Talar"
                  className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Lote 17 Mza 295 S/N San Alfonso del Talar"
                />
                <FindMeCopy text="Lote 17 Mza 295 S/N San Alfonso del Talar" message="Address copied!" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Ciudad
              </label>
              <div className="flex gap-x-3">
                <input
                  readOnly
                  type="text"
                  name="city"
                  id="city"
                  value="Mendiolaza"
                  className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Mendiolaza"
                />
                <FindMeCopy text="Mendiolaza" message="City copied!" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Codigo Postal
              </label>
              <div className="flex gap-x-3">
                <input
                  readOnly
                  type="text"
                  name="cp"
                  id="cp"
                  value="5107"
                  className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="5107"
                />
                <FindMeCopy text="5107" message="CP copied" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Familiar Italiano
              </label>
              <div className="flex gap-x-3">
                <input
                  readOnly
                  type="text"
                  name="familiar"
                  id="familiar"
                  value="Ermanno Zoff"
                  className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Ermanno Zoff"
                />
                <FindMeCopy text="Ermanno Zoff" message="Familiar copied" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
