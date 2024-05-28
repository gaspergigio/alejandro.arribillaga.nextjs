'use client'
import { useState } from 'react'

import Image from 'next/image'

import { HtmlEditor } from '@/components'

export default function BlogForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [thumbPreview, setThumbPreview] = useState<string | null>(null)
  const [content, setContent] = useState('')

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, setImage: (value: string | null) => void) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (typeof reader.result === 'string') setImage(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImage(null)
    }
  }
  return (
    <form className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            <label htmlFor="title" className="text-base font-medium text-white">
              Title
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="published_date" className="text-base font-medium text-white">
              Published Date
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="date"
                name="published_date"
                id="published_date"
                placeholder="Published Date"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="img_src" className="text-base font-medium text-white">
              Image
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="file"
                name="img_src"
                id="img_src"
                accept="image/*"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => handleImageChange(e, setImagePreview)}
              />
            </div>
            {imagePreview && (
              <div className="mt-4">
                <Image alt="Image Preview" className="max-h-48 rounded-lg" src={imagePreview} width={48} height={48} />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="thumb_src" className="text-base font-medium text-white">
              Thumbnail
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="file"
                name="thumb_src"
                id="thumb_src"
                accept="image/*"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => handleImageChange(e, setThumbPreview)}
              />
            </div>
            {thumbPreview && (
              <div className="mt-4">
                <Image
                  alt="Thumbnail Preview"
                  className="max-h-48 rounded-lg"
                  src={thumbPreview}
                  width={48}
                  height={48}
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="status_id" className="text-base font-medium text-white">
              Status
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <select
                name="status_id"
                id="status_id"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label htmlFor="slug" className="text-base font-medium text-white">
                Slug
              </label>
            </div>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="text"
                name="slug"
                id="slug"
                placeholder="Slug"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="seo_title" className="text-base font-medium text-white">
              SEO Title
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="text"
                name="seo_title"
                id="seo_title"
                placeholder="SEO Title"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="seo_description" className="text-base font-medium text-white">
              SEO Description
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <textarea
                name="seo_description"
                id="seo_description"
                placeholder="SEO Description"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="medium_url" className="text-base font-medium text-white">
              Medium URL
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="url"
                name="medium_url"
                id="medium_url"
                placeholder="Medium URL"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="preview" className="text-base font-medium text-white">
              Preview
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <textarea
                name="preview"
                id="preview"
                placeholder="Preview"
                className="block w-full min-h-[9.2rem] h-auto px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex-1 pb-8">
            <label htmlFor="body" className="text-base font-medium text-white">
              Body
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600 h-full">
              <HtmlEditor value={content} onChange={setContent} placeholder="Body" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="text-sm py-2 w-1/4 px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between">
          Save
        </button>
      </div>
    </form>
  )
}
