import { IPostList } from '@/server/types'

export interface IBlogListClient extends IPostList {
  children: React.ReactNode
  title: string
  description: string
  loadMoreText: string
}
