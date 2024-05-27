'use client'

import React from 'react'

import * as Component from '@/components'
import useFetch from '@/hooks/useFetch'
import { INewsResponse } from '@/services/module/news/interface'

import Styles from './news.module.css'

export default function NewsPage({ params }: { params: { slug: string } }) {
  const { data, isLoading, error } = useFetch<INewsResponse>(`/news/${params.slug}`)

  return (
    <main className={Styles.main}>
      {isLoading && <Component.Loading />}

      {!isLoading && !error && data && (
        <React.Fragment>
          <section>
            <Component.Headline {...data} />

            <h2>{data?.subtitle}</h2>
          </section>

          <Component.Banner />

          <section>
            <Component.Content {...data} />
          </section>
        </React.Fragment>
      )}
    </main>
  )
}
