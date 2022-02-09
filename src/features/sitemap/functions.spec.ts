import { generateSitemapXml } from './functions'

describe('generateSitemapXml function', () => {
  test('should return valid xml string', () => {
    const expectedXml = `
<?xmlversion="1.0"encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hirokifj.io/</loc>
    <lastmod>2022-01-02</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://hirokifj.io/test2</loc>
    <lastmod>2022-01-02</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://hirokifj.io/test</loc>
    <lastmod>2022-01-01</lastmod>
    <changefreq>weekly</changefreq>
  </url>
</urlset>
`.replace(/\s+/g, '')

    expect(generateSitemapXml().replace(/\s+/g, '')).toBe(expectedXml)
  })
})
