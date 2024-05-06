'use client'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover'

export default function FindMeCopy() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('alejandro.arribillaga@gmail.com')
  }

  return (
    <Popover placement="top" color="primary" showArrow shouldCloseOnBlur>
      <PopoverTrigger>
        <button
          className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
          onClick={copyToClipboard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-copy">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-tiny">Email copied</div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
