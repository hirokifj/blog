import React from 'react'
import { Post } from '@/features/posts'
import { PostListItem } from '@/components/organisms/PostListItem'
import styles from './PostList.module.scss'

export type PostListProps = {
  posts: Post[]
}

export const PostList: React.VFC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className={styles.item}>
          <PostListItem post={post} />
        </div>
      ))}
    </div>
  )
}
