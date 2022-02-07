import React from 'react'
import styles from './Tag.module.scss'

export type TagProps = {
  children: React.ReactNode
}

export const Tag: React.VFC<TagProps> = ({ children }) => {
  return <div className={styles.tag}>{children}</div>
}
