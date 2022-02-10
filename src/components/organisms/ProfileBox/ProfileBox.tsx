import React from 'react'
import Image from 'next/image'
import styles from './ProfileBox.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { GITHUB_URL, TWITTER_URL } from '@/constants/sns'

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
        <div className={styles.links}>
          <a
            className={styles.iconLink}
            href={TWITTER_URL}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
          </a>
          <a
            className={styles.iconLink}
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  )
}
