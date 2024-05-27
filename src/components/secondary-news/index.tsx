import React from 'react'

import { INewsResponse } from '@/services/module/news/interface'
import * as util from '@/utils'

import Styles from './secondary-news.module.css'

export const SecondaryNews: React.FC<INewsResponse> = news => {
  const borderColor = util.topicColorMapper[news.topic]

  return (
    <section className={Styles.secondaryNews} style={{ borderLeft: `5px solid ${borderColor}` }}>
      <h3>{news.title}</h3>
    </section>
  )
}
