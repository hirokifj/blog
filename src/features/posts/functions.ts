import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { ParsedMarkdownFile, Post, POSTS_DIR } from './types'
import { isStringArray } from '@/utils/array'
import { assert } from '@/utils/assert'

export function fetchSortedPosts(): Post[] {
  const posts = fetchPostIds().map(fetchPostById)

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function fetchPostById(id: string): Post {
  const fileContent = fs.readFileSync(path.join(POSTS_DIR, `${id}.md`), 'utf8')

  const { frontMatter, content } = parseMarkdownFile(fileContent)

  return {
    ...frontMatter,
    makrdownContent: content,
    id,
  }
}

export function fetchPostIds(): string[] {
  return fetchFileNames().map(toPostId)
}

function fetchFileNames(): string[] {
  return fs.readdirSync(POSTS_DIR)
}

function toPostId(fileName: string): string {
  return fileName.replace(/\.md$/, '')
}

function parseMarkdownFile(fileContents: string): ParsedMarkdownFile {
  const { data: frontMatter, content } = matter(fileContents)
  assertFrontMatter(frontMatter)

  return {
    frontMatter,
    content,
  }
}

function assertFrontMatter(
  frontMatter: Record<string, any>,
): asserts frontMatter is {
  title: string
  date: number
  updatedDate?: number
  tags: string[]
} {
  assert(
    'title' in frontMatter && typeof frontMatter.title === 'string',
    'Invalid FrontMatter: title is invalid',
  )

  assert(
    'date' in frontMatter &&
      typeof frontMatter.date === 'number' &&
      String(frontMatter.date).length === 8,
    'Invalid FrontMatter: date is invalid',
  )

  if ('updatedDate' in frontMatter) {
    assert(
      typeof frontMatter.updatedDate === 'number' &&
        String(frontMatter.updatedDate).length === 8,
      'Invalid FrontMatter: updatedDate is invalid',
    )
  }

  assert(
    'tags' in frontMatter &&
      Array.isArray(frontMatter.tags) &&
      isStringArray(frontMatter.tags),
    'Invalid FrontMatter: tags is invalid',
  )
}
