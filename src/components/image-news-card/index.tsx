import React from 'react'

import Image from 'next/image'

import styles from './image-news-card.module.css'

export const ImageNewsCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src="/news-1.jpg" alt="News" width={280} height={190} className={styles.image} />
      </div>
      <div className={styles.news}>
        <h2>Educação</h2>
        <h3>Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização</h3>
      </div>
    </div>
  )
}
