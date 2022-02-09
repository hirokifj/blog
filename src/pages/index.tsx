import type { NextPage } from 'next'
import { MyHead } from '@/components/functionals/MyHead'
import { BLOG_TITLE } from '@/constants/blog'
import { fetchSortedPosts, Post } from '@/features/posts'
import { HomeTemplate } from '@/components/templates/HomeTemplate'

type Props = {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <MyHead title={BLOG_TITLE} />
      <HomeTemplate posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = fetchSortedPosts()

  return {
    props: { posts },
  }
}

export default Home
