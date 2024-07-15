/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useRef, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { HtmlEditor } from '@/components'
import { BlogStatus, ImageStatus } from './BlogForm.types'
import { BlogDialogSchema } from './BlogForm.validations'
import { removeFile, savePost, uploadFile } from '@/server'
import { toast } from 'react-hot-toast'

type FormData = z.infer<typeof BlogDialogSchema>

export default function BlogForm({ statusList }: { statusList: BlogStatus[] }) {
  const [imageStatus, setImageStatus] = useState<ImageStatus>({ focused: false, path: '', isLoading: false })
  const [thumbStatus, setThumbStatus] = useState<ImageStatus>({ focused: false, path: '', isLoading: false })
  const [contentFocused, setContentFocused] = useState<boolean>(false)
  const imageRef = useRef<HTMLInputElement>(null)
  const thumbRef = useRef<HTMLInputElement>(null)

  const setImage = (imageType: 'image' | 'thumbnail', path: string) => {
    if (imageType === 'image') {
      setImageStatus({ ...imageStatus, focused: true, path })
    } else {
      setThumbStatus({ ...thumbStatus, focused: true, path })
    }
  }

  const handleContentFocus = () => {
    setContentFocused(true)
  }

  const handleContentChange = (value: string) => {
    if (contentFocused) setValue('content', value, { shouldValidate: true })
  }

  const handleImageRespondeCallback = (fullPath: string | null, imageType: 'image' | 'thumbnail') => {
    if (fullPath) {
      setImage(imageType, fullPath)
    }
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, imageType: 'image' | 'thumbnail') => {
    const inputFile = event.target.files as FileList
    const file = inputFile?.[0]
    if (file) {
      uploadFile(file).then((fullPath: string | null) => handleImageRespondeCallback(fullPath, imageType))
    }
  }

  const handleRemoveImage = (imageType: 'image' | 'thumbnail', isReseting: boolean = false) => {
    setImage(imageType, '')
    //reset the input file
    if (imageType === 'image') {
      if (!isReseting) removeFile(imageStatus.path)
      if (imageRef.current) imageRef.current.value = ''
    }
    if (imageType === 'thumbnail') {
      if (!isReseting) removeFile(thumbStatus.path)
      if (thumbRef.current) thumbRef.current.value = ''
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    resolver: zodResolver(BlogDialogSchema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!thumbStatus.path || !imageStatus.path) {
      return
    }

    const postData = {
      ...data,
      img_path: imageStatus.path,
      thumb_path: thumbStatus.path,
    }

    savePost(postData)
      .then((success) => {
        if (success) {
          toast.success('Post Saved!')
          handleRemoveImage('image', true)
          handleRemoveImage('thumbnail', true)
          setImageStatus({ focused: false, path: '', isLoading: false })
          setThumbStatus({ focused: false, path: '', isLoading: false })
          reset(undefined, { keepDirtyValues: false, keepIsSubmitted: false, keepErrors: false, keepValues: false })
          setContentFocused(false)
        } else {
          toast.error('Post not saved!')
        }
      })
      .catch((error) => {
        console.error('Error saving post:', error)
        toast.error('You Fail!')
      })
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
                autoComplete="off"
                name="title"
                id="title"
                placeholder="Title"
                className="block w-full h-12 px-4 py-2 text-sm text-white bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                className="block w-full h-12 px-4 py-2 text-sm text-white bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                className="block w-full h-12 px-4 py-2 text-sm text-white bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                onClick={() => setImageStatus({ ...imageStatus, isLoading: true })}
                onChange={(e) => handleImageChange(e, 'image')}
                onBlur={() => setImageStatus({ ...imageStatus, focused: true })}
              />
              {(imageStatus.focused || isSubmitted) && !imageStatus.isLoading && !imageStatus.path && (
                <p style={{ color: 'red' }}>Image is required</p>
              )}
            </div>
            {imageStatus.path && (
              <div className="mt-4">
                <img
                  src={imageStatus.path}
                  onLoad={() => setImageStatus({ ...imageStatus, isLoading: false })}
                  style={{ cursor: 'pointer' }}
                  alt="Blog Image"
                  className="max-h-48 rounded-lg"
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
                onClick={() => setThumbStatus({ ...thumbStatus, isLoading: true })}
                className="block w-full h-12 px-4 py-2 text-sm text-white bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => handleImageChange(e, 'thumbnail')}
                onBlur={() => setThumbStatus({ ...thumbStatus, focused: true })}
              />
              {(thumbStatus.focused || isSubmitted) && !thumbStatus.isLoading && !thumbStatus.path && (
                <p style={{ color: 'red' }}>Thumbnail is required</p>
              )}
            </div>
            {thumbStatus.path && (
              <div className="mt-4">
                <img
                  src={thumbStatus.path}
                  onLoad={() => setThumbStatus({ ...thumbStatus, isLoading: false })}
                  style={{ cursor: 'pointer' }}
                  alt="Thumb Image"
                  className="max-h-48 rounded-lg"
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
                className="block w-full h-12 px-4 py-2 text-sm text-white bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm">
                {statusList?.map((x) => (
                  <option key={x.value} value={x.value}>
                    {x.text}
                  </option>
                ))}
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
                autoComplete="off"
                id="slug"
                placeholder="Slug"
                className="block w-full h-12 px-4 py-2 text-sm text-white bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                autoComplete="off"
                name="seo_title"
                id="seo_title"
                placeholder="SEO Title"
                className="block w-full h-12 px-4 py-2 text-sm text-white bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                className="block w-full h-12 px-4 py-2 text-sm text-white bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                autoComplete="off"
                name="medium_url"
                id="medium_url"
                placeholder="Medium URL"
                className="block w-full h-12 px-4 py-2 text-sm text-white bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                className="block w-full min-h-[9.2rem] h-auto px-4 py-2 text-sm text-white bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                render={({ field }) => (
                  <HtmlEditor
                    {...field}
                    placeholder="Body"
                    onChange={handleContentChange}
                    onFocus={handleContentFocus}
                  />
                )}
              />
              {errors.content && contentFocused && <p style={{ color: 'red' }}>{'Content is Required'}</p>}
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
