'use client'

import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { INewsResponse } from '@/services/module/news/interface'
import * as utils from '@/utils'

import styles from './image-news-card.module.css'

export const ImageNewsCard: React.FC<INewsResponse> = news => {
  const router = useRouter()
  return (
    <div className={styles.container} onClick={() => router.push(`/news/${news.id}`)}>
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
