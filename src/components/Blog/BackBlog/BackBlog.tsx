import Link from 'next/link'
import { IconArrowLeft } from '@tabler/icons-react'

export default function BackBlog() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <Link
        className="hover:text-opacity-80 focus:text-opacity-80 text-primary font-semibold mt-8 flex gap-2"
        href="/blog">
        <IconArrowLeft color="black" strokeWidth={0.8} /> Back to Log
      </Link>
    </div>
  )
}
