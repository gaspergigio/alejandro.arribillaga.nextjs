'use client'
import React, { useRef, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Image from 'next/image'

import { HtmlEditor } from '@/components'
import { ImageStatus } from './BlogForm.types'
import { BlogDialogSchema } from './BlogForm.validations'

type FormData = z.infer<typeof BlogDialogSchema>

export default function BlogForm() {
  const [imageStatus, setImageStatus] = useState<ImageStatus>({ focused: false, preview: '', path: '' })
  const [thumbStatus, setThumbStatus] = useState<ImageStatus>({ focused: false, preview: '', path: '' })
  const imageRef = useRef<HTMLInputElement>(null)
  const thumbRef = useRef<HTMLInputElement>(null)

  const setImage = (imageType: 'image' | 'thumbnail', filename: string, value: string = '') => {
    if (imageType === 'image') {
      setImageStatus({ focused: true, preview: value, path: filename })
    } else {
      setThumbStatus({ focused: true, preview: value, path: filename })
    }
  }

  const handleContentChange = (value: string) => {
    setValue('content', value, { shouldValidate: true })
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, imageType: 'image' | 'thumbnail') => {
    const inputFile = event.target.files as FileList
    const file = inputFile?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (typeof reader.result === 'string') setImage(imageType, file.name ?? '', reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = (imageType: 'image' | 'thumbnail') => {
    setImage(imageType, '', '')
    //reset the input file
    if (imageType === 'image' && imageRef.current) imageRef.current.value = ''
    if (imageType === 'thumbnail' && thumbRef.current) thumbRef.current.value = ''
  }

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    resolver: zodResolver(BlogDialogSchema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!thumbStatus.path || !imageStatus.path) {
      return
    }

    console.log('On Submit', data, thumbStatus.path, imageStatus.path)
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            <label htmlFor="title" className="text-base font-medium text-white">
              Title
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                {...register('title')}
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="published_date" className="text-base font-medium text-white">
              Published Date
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                type="date"
                {...register('published_date')}
                name="published_date"
                id="published_date"
                placeholder="Published Date"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.published_date && <p style={{ color: 'red' }}>{errors.published_date.message}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="img_src" className="text-base font-medium text-white">
              Image
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                ref={imageRef}
                type="file"
                id="image"
                accept="image/*"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => handleImageChange(e, 'image')}
                onBlur={() => setImageStatus({ ...imageStatus, focused: true })}
              />
              {(imageStatus.focused || isSubmitted) && !imageStatus.path && (
                <p style={{ color: 'red' }}>Imagen es Requerida</p>
              )}
            </div>
            {imageStatus.preview && (
              <div className="mt-4">
                <Image
                  alt={imageStatus.path}
                  style={{ cursor: 'pointer' }}
                  className="max-h-48 rounded-lg"
                  src={imageStatus.preview}
                  width={48}
                  height={48}
                  onClick={() => {
                    handleRemoveImage('image')
                  }}
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="thumb_src" className="text-base font-medium text-white">
              Thumbnail
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                ref={thumbRef}
                type="file"
                id="thumbnail"
                accept="image/*"
                style={{ cursor: 'pointer' }}
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => handleImageChange(e, 'thumbnail')}
                onBlur={() => setThumbStatus({ ...thumbStatus, focused: true })}
              />
              {(thumbStatus.focused || isSubmitted) && !thumbStatus.path && (
                <p style={{ color: 'red' }}>Thumbnail es Requerido</p>
              )}
            </div>
            {thumbStatus.preview && (
              <div className="mt-4">
                <Image
                  alt={thumbStatus.path}
                  className="max-h-48 rounded-lg"
                  src={thumbStatus.preview}
                  width={48}
                  height={48}
                  onClick={() => {
                    handleRemoveImage('thumbnail')
                  }}
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
                {...register('status_id')}
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
              {errors.status_id && <p style={{ color: 'red' }}>{errors.status_id.message}</p>}
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
                {...register('slug')}
                type="text"
                name="slug"
                id="slug"
                placeholder="Slug"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.slug && <p style={{ color: 'red' }}>{errors.slug.message}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="seo_title" className="text-base font-medium text-white">
              SEO Title
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                {...register('seo_title')}
                type="text"
                name="seo_title"
                id="seo_title"
                placeholder="SEO Title"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.seo_title && <p style={{ color: 'red' }}>{errors.seo_title.message}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="seo_description" className="text-base font-medium text-white">
              SEO Description
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <textarea
                {...register('seo_description')}
                name="seo_description"
                id="seo_description"
                placeholder="SEO Description"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.seo_description && <p style={{ color: 'red' }}>{errors.seo_description.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="medium_url" className="text-base font-medium text-white">
              Medium URL
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <input
                {...register('medium_url')}
                type="url"
                name="medium_url"
                id="medium_url"
                placeholder="Medium URL"
                className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.medium_url && <p style={{ color: 'red' }}>{errors.medium_url.message}</p>}
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
                {...register('preview')}
                name="preview"
                id="preview"
                placeholder="Preview"
                className="block w-full min-h-[9.2rem] h-auto px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.preview && <p style={{ color: 'red' }}>{errors.preview.message}</p>}
            </div>
          </div>
          <div className="flex-1 pb-8">
            <label htmlFor="body" className="text-base font-medium text-white">
              Body
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600 h-full">
              <Controller
                name="content"
                control={control}
                render={({ field }) => <HtmlEditor {...field} placeholder="Body" onChange={handleContentChange} />}
              />
              {errors.content && <p style={{ color: 'red' }}>{'Content is Required'}</p>}
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
