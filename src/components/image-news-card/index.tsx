import React from 'react'

import Image from 'next/image'

import { INewsResponse } from '@/services/module/news/interface'
import * as utils from '@/utils'

import styles from './image-news-card.module.css'

export const ImageNewsCard: React.FC<INewsResponse> = news => {
  console.log(news)
  return (
    <div className={styles.container}>
      <div>
        <Image src={news.image ?? ''} alt="News" width={280} height={190} className={styles.image} priority />
      </div>
      <div className={styles.news}>
        <h2>{utils.topicMapper[news.topic]}</h2>
        <h3>{news.title}</h3>
      </div>
    </div>
  )
}
