'use client'
import React from 'react'

import { useRouter } from 'next/navigation'

import { IconEdit } from '@tabler/icons-react'

import { useSessionContext } from '@/components'
import { Tooltip } from '@nextui-org/tooltip'

export default function BlogEditButton({ slug }: { slug: string }) {
  const { isAdmin } = useSessionContext()
  const router = useRouter()
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.push(`/blog/${slug}/edit`)
    event.preventDefault()
  }

  if (!isAdmin) return <></>
  return (
    <Tooltip content="Edit Post" color="primary">
      <button
        onClick={handleOnClick}
        className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-6 w-6">
        {<IconEdit color="white" strokeWidth={0.8} />}
      </button>
    </Tooltip>
  )
}
