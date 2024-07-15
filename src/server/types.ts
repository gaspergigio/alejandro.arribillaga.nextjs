//escribe una interface en typescript llamada post
export default interface IPost {
  id: number
  title: string
  content: string
  created_at?: string
  updatet_at?: string
  seo_description?: string
  medium_url?: string
  slug: string
  seo_title?: string
  preview?: string
  published_date: string
  img_path: string
  thumb_path: string
  Entity: {
    name: string
  }
}
