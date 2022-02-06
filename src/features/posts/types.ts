export interface Post {
  id: string
  title: string
  date: number
  updatedDate?: number
  tags: string[]
  makrdownContent: string
}
