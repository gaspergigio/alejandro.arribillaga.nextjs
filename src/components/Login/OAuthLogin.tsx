'use client'
import { IconBrandGithub, IconBrandLinkedin, IconBrandGoogle, IconBrandApple } from '@tabler/icons-react'

import { signInOAuth } from '@/server'
import { Tooltip } from '@nextui-org/tooltip'

export default function OAuthLogin() {
  const handleSignIn = () => {
    signInOAuth()
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 w-full">
      <Tooltip content="Github" color="primary">
        <button
          className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-10 w-10"
          onClick={handleSignIn}>
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
  )
}
