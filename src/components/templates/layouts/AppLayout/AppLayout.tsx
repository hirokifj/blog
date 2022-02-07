import React from 'react'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'
import styles from './AppLayout.module.scss'

export type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout: React.VFC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.applayout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>{children}</div>
      <div className={styles.footert}>
        <Footer />
      </div>
    </div>
  )
}
