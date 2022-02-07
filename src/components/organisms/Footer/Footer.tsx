import React from 'react'
import NextLink from 'next/link'
import styles from './Footer.module.scss'
import { BLOG_TITLE } from '@/constants/blog'

export const Footer: React.VFC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <NextLink href="/">
          <a className={styles.title}>{BLOG_TITLE}</a>
        </NextLink>
      </div>
    </div>
  )
}
