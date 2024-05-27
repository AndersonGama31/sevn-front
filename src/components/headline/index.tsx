import React from 'react'

import { INewsResponse } from '@/services/module/news/interface'
import * as utils from '@/utils'

import Styles from './headline.module.css'

export const Headline: React.FC<INewsResponse> = headline => {
  return (
    <div className={Styles.headline}>
      <p>{utils.topicMapper[headline.topic]}</p>
      <h1>{headline.title}</h1>
    </div>
  )
}
