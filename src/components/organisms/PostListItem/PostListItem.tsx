import React from 'react'
import NextLink from 'next/link'
import { Post } from '@/features/posts'
import { Tag } from '@/components/atoms/Tag'
import { toFormattedDateString } from '@/utils/date'
import styles from './PostListItem.module.scss'

export type PostListItemProps = {
  post: Post
}

export const PostListItem: React.VFC<PostListItemProps> = ({ post }) => {
  return (
    <div className={styles.item}>
      <div className={styles.tags}>
        {post.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
      <h2 className={styles.title}>
        <NextLink href={`/${post.id}`} passHref>
          <a className={styles.titleLink}>{post.title}</a>
        </NextLink>
      </h2>
      <span className={styles.date}>{toFormattedDateString(post.date)}</span>
    </div>
  )
}
