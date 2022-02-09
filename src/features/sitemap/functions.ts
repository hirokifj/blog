import { fetchSortedPosts } from '@/features/posts'
import { BLOG_URL } from '@/constants/blog'
import { toFormattedDateString } from '@/utils/date'

export function generateSitemapXml(): string {
  const posts = fetchSortedPosts()

  const lastUpdatedDate = Math.max(
    ...posts.map((post) => post.updatedDate ?? post.date),
  )

  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  xml += `
  <url>
    <loc>${BLOG_URL}/</loc>
    <lastmod>${toFormattedDateString(lastUpdatedDate, 'YYYY-MM-DD')}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
`

  posts.forEach((post) => {
    xml += `
      <url>
        <loc>${BLOG_URL}/${post.id}</loc>
        <lastmod>${toFormattedDateString(
          post.updatedDate ?? post.date,
          'YYYY-MM-DD',
        )}</lastmod>
        <changefreq>weekly</changefreq>
      </url>
    `
  })

  xml += `</urlset>`
  return xml
}
