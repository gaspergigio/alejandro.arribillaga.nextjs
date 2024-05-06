import FindMeCopy from './FindMeCopy'

function FindMe({ children }: { children: React.ReactNode }) {
  return (
    <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary">
      <div className="w-full">
        <p className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl">Find me on</p>
      </div>
      <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
        <div className="col-span-4 gap-x-3 flex">
          <div className="flex items-center justify-center h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
              viewBox="0 0 24 24"
              strokeWidth="0.8"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </div>

          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            readOnly
            type="email"
            name="email-address"
            id="email-address"
            autoComplete="email"
            value="alejandro.arribillaga@gmail.com"
            className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter your email"
          />

          {children}
        </div>
        <div className="col-span-4 flex gap-4 w-full justify-end">
          <a
            href="https://github.com/gaspergigio"
            target="_blank"
            className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
              viewBox="0 0 24 24"
              strokeWidth="0.8"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/alejandroarribillaga"
            target="_blank"
            className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin"
              viewBox="0 0 24 24"
              strokeWidth="0.8"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

FindMe.Copy = FindMeCopy

export default FindMe
