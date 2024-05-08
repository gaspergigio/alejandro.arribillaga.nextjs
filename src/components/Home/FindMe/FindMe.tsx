import FindMeCopy from './FindMeCopy'
import { IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react'

function FindMe({ children }: { children: React.ReactNode }) {
  return (
    <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary">
      <div className="w-full">
        <p className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl">Find me on</p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
          Feel free to reach out to me if you have any questions, comments, or inquiries. I'm here to assist you with
          anything you need and address any concerns you may have. Your feedback is valuable to me, and I look forward
          to hearing from you
        </p>
      </div>
      <div className="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full">
        <div className="col-span-4 gap-x-3 flex">
          <div className="flex items-center justify-center h-12 w-12">
            <IconMail color="white" strokeWidth={0.8} />
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
            <IconBrandGithub color="white" strokeWidth={0.8} />
          </a>
          <a
            href="https://www.linkedin.com/in/alejandroarribillaga"
            target="_blank"
            className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12">
            <IconBrandLinkedin color="white" strokeWidth={0.8} />
          </a>
        </div>
      </div>
    </div>
  )
}

FindMe.Copy = FindMeCopy

export default FindMe
