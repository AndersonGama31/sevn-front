import React from 'react'

import { INewsResponse } from '@/services/module/news/interface'

export const Content: React.FC<INewsResponse> = data => {
  return <article dangerouslySetInnerHTML={{ __html: data?.content || '' }}></article>
}
