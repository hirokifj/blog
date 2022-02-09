import { GetServerSidePropsContext } from 'next'
import { generateSitemapXml } from '@/features/sitemap'

// https://zenn.dev/catnose99/articles/c441954a987c24
export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = generateSitemapXml()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)

  return {
    props: {},
  }
}

const SiteMap = () => null

export default SiteMap
