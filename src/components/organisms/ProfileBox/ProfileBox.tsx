import React from 'react'
import Image from 'next/image'
import styles from './ProfileBox.module.scss'

export const ProfileBox: React.VFC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <Image src="/profile.png" alt="hirokifj" width={120} height={120} />
        </div>
        <div className={styles.name}>hirokifj</div>
        <div className={styles.description}>
          <p>
            フロントエンドエンジニア。営業/ディレクターを経てエンジニアになりました。
          </p>
          <p>主に React/TypeScript を使ってます。</p>
        </div>
      </div>
    </div>
  )
}
