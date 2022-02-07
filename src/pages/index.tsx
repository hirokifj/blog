import type { NextPage } from 'next'
import { fetchSortedPosts, Post } from '@/features/posts'
import { HomeTemplate } from '@/components/templates/HomeTemplate'

type Props = {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return <HomeTemplate posts={posts} />
}

export async function getStaticProps() {
  const posts = fetchSortedPosts()

  return {
    props: { posts },
  }
}

export default Home
