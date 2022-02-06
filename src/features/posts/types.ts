import path from 'path'

export interface Post {
  id: string
  title: string
  date: number
  updatedDate?: number
  tags: string[]
  makrdownContent: string
}

export interface ParsedMarkdownFile {
  frontMatter: {
    title: string
    date: number
    updatedDate?: number
    tags: string[]
  }
  content: string
}

export const POSTS_DIR = path.join(
  process.cwd(),
  process.env.TEST_POSTS_PATH ?? 'src/_posts',
)
