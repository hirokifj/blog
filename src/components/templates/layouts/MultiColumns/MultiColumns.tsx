import React from 'react'
import styles from './MultiColumns.module.scss'

export type MultiColumnsProps = {
  mainContent: React.ReactNode
  sideContent: React.ReactNode
}

export const MultiColumns: React.VFC<MultiColumnsProps> = ({
  mainContent,
  sideContent,
}) => {
  return (
    <div className={styles.multiColumns}>
      <div className={styles.container}>
        <div className={styles.mainContent}>{mainContent}</div>
        <div className={styles.sideContent}>{sideContent}</div>
      </div>
    </div>
  )
}
