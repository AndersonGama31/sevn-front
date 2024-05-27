'use client'

import * as Component from '@/components'
import useFetch from '@/hooks/useFetch'
import { IListAllNewsResponse } from '@/services/module/news/interface'

import Styles from './home.module.css'

export default function HomePage() {
  const { data: main, isLoading, error } = useFetch<IListAllNewsResponse>('/news')

  return (
    <main className={Styles.main}>
      <Component.Banner />

      {isLoading && <Component.Loading />}

      {!error && !isLoading && main && (
        <section>
          <Component.Headline {...main?.headline} />

          <div className={Styles.newsCards}>
            {main?.illustrated_news?.map(news => {
              return <Component.ImageNewsCard key={news.id} {...news} />
            })}
          </div>
        </section>
      )}

      <section className={Styles.secondaryNews}>
        <Component.SecondaryNews />
        <Component.SecondaryNews />
        <Component.SecondaryNews />
        <Component.SecondaryNews />
        <Component.SecondaryNews />
        <Component.SecondaryNews />
        <Component.SecondaryNews />
        <Component.SecondaryNews />
      </section>
    </main>
  )
}
