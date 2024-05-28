import { IconBrandGithub, IconBrandLinkedin, IconBrandGoogle, IconBrandApple } from '@tabler/icons-react'

import { Tooltip } from '@nextui-org/tooltip'

export default function Page() {
  return (
    <section className="extend-height">
      <div className="flex flex-col items-center p-4">
        <div className=" w-1/4 mt-20 h-full">
          <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-center shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white dark:bg-secondary">
            <div className="w-full">
              <p className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl">Login</p>
              <p className="mt-4 mb-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
                To access all my apps, you must be a registered user
              </p>
            </div>
            <form className="w-full">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-white">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email to get started"
                      className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-white">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Enter your password"
                      className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between">
                    Log in
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">OR sign in with:</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-8 w-full">
                  <Tooltip content="Github" color="primary">
                    <button className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-10 w-10">
                      {<IconBrandGithub color="white" strokeWidth={0.8} />}
                    </button>
                  </Tooltip>
                  <Tooltip content="Linkedin" color="primary">
                    <button className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-10 w-10">
                      {<IconBrandLinkedin color="white" strokeWidth={0.8} />}
                    </button>
                  </Tooltip>
                  <Tooltip content="Google" color="primary">
                    <button className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-10 w-10">
                      {<IconBrandGoogle color="white" strokeWidth={0.8} />}
                    </button>
                  </Tooltip>
                  <Tooltip content="Apple" color="primary">
                    <button className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-10 w-10">
                      {<IconBrandApple color="white" strokeWidth={0.8} />}
                    </button>
                  </Tooltip>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
