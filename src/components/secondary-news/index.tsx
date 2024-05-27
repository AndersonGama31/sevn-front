'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import { INewsResponse } from '@/services/module/news/interface'
import * as util from '@/utils'

import Styles from './secondary-news.module.css'

export const SecondaryNews: React.FC<INewsResponse> = news => {
  const borderColor = util.topicColorMapper[news.topic]
  const router = useRouter()

  return (
    <section
      className={Styles.secondaryNews}
      style={{ borderLeft: `5px solid ${borderColor}` }}
      onClick={() => router.push(`/news/${news.id}`)}
    >
      <h3>{news.title}</h3>
    </section>
  )
}
