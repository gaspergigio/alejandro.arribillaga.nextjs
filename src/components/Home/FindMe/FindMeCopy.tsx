'use client'
import React from 'react'
import { IconCopy } from '@tabler/icons-react'

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
          <IconCopy color="white" strokeWidth={0.8} />
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
