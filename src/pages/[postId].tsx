import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { MyHead } from '@/components/functionals/MyHead'
import { Post, fetchPostById, fetchPostIds } from '@/features/posts'
import { PostTemplate } from '@/components/templates/PostTemplate'

type Props = {
  post: Post
}

interface Params extends ParsedUrlQuery {
  postId: string
}

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <>
      <MyHead title={post.title} />
      <PostTemplate post={post} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fetchPostIds().map((postId) => ({
      params: {
        postId,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params?.postId) {
    throw new Error('Invalid parameter: postId is not given')
  }

  const post = await fetchPostById(params.postId)

  return {
    props: {
      post,
    },
  }
}

export default PostPage
