import React from 'react'
import { Post } from '@/features/posts'
import { MarkdownRenderer } from '@/components/organisms/MarkdownRenderer'
import { Tag } from '@/components/atoms/Tag'
import { toFormattedDateString } from '@/utils/date'
import styles from './PostDetail.module.scss'

export type PostDetailProps = {
  post: Post
}

export const PostDetail: React.VFC<PostDetailProps> = ({ post }) => {
  return (
    <div className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.tags}>
        {post.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
      <div className={styles.dateBox}>
        <span className={styles.date}>
          公開: {toFormattedDateString(post.date)}
        </span>
        {post.updatedDate && (
          <span className={styles.date}>
            更新: {toFormattedDateString(post.updatedDate)}
          </span>
        )}
      </div>
      <div className={styles.content}>
        <MarkdownRenderer markdownText={post.makrdownContent} />
      </div>
    </div>
  )
}
