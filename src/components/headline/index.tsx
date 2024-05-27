'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import { INewsResponse } from '@/services/module/news/interface'
import * as utils from '@/utils'

import Styles from './headline.module.css'

export const Headline: React.FC<INewsResponse> = headline => {
  const router = useRouter()
  return (
    <div className={Styles.headline} onClick={() => router.push(`/news/${headline.id}`)}>
      <p>{utils.topicMapper[headline.topic]}</p>
      <h1>{headline.title}</h1>
    </div>
  )
}
