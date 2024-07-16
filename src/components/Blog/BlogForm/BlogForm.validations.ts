import { removeHTML } from '@/utils'
import { z } from 'zod'

export const BlogDialogSchema = z.object({
  id: z.number().int().optional(),
  seo_description: z.string().min(1, { message: 'SEO Description is required' }),
  medium_url: z.string().url({ message: 'Must be a valid URL' }).optional(),
  status_id: z.string().min(1, { message: 'Status is required' }),
  slug: z.string().min(1, { message: 'Slug is required' }),
  seo_title: z.string().min(1, { message: 'SEO Title is required' }),
  preview: z.string().min(1, { message: 'Preview is required' }),
  title: z.string().min(1, { message: 'Title is required' }),
  published_date: z
    .string()
    .min(1, { message: 'Published Date is required' })
    .transform((str) => new Date(str))
    .refine((date) => date >= new Date('2024-01-01'), { message: 'Published Date is too old' }),
  content: z.string().refine((value: string) => {
    const textOnly = removeHTML(value)
    return textOnly.trim().length > 0
  }),
})
