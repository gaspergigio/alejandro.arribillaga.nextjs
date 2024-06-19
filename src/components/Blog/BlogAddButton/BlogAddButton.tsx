'use client'
import React from 'react'
import Link from 'next/link'

import { IconPlus } from '@tabler/icons-react'

import { useSessionContext } from '@/components/Common'
import { Tooltip } from '@nextui-org/tooltip'

export default function BlogAddButton() {
  const { isAdmin } = useSessionContext()

  if (!isAdmin) return <></>
  return (
    <Tooltip content="New Post" color="primary">
      <Link
        href={`/blog/create`}
        className="flex mt-2 items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12">
        {<IconPlus color="white" strokeWidth={0.8} />}
      </Link>
    </Tooltip>
  )
}
