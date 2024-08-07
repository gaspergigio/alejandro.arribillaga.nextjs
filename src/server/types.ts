//escribe una interface en typescript llamada post
export const PAGE_SIZE = 30

export default interface IPost {
  id?: number
  title: string
  en_title: string
  content: string
  created_at?: string
  updatet_at?: string
  seo_description: string
  medium_url?: string
  youtube_url?: string
  tags?: string
  slug: string
  seo_title: string
  preview?: string
  en_preview?: string
  published_date: Date
  img_path: string
  thumb_path: string
  status_id: string
  Entity: {
    name: string
  }
}

export interface IPostList {
  data: IPost[] | null
  total: number
}
