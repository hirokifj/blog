import React from 'react'
import NextLink from 'next/link'
import { BLOG_TITLE } from '@/constants/blog'
import styles from './Header.module.scss'

export const Header: React.VFC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <NextLink href="/">
          <a className={styles.title}>{BLOG_TITLE}</a>
        </NextLink>
      </div>
    </div>
  )
}
