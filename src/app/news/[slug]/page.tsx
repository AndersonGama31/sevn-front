import * as Component from '@/components'

import Styles from './news.module.css'

export default function NewsPage({ params }: { params: { slug: string } }) {
  return (
    <main className={Styles.main}>
      <section>
        <Component.Headline />

        <h2>
          Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os
          clientes tenham a receber cerca de R$ 8 bilhões.
        </h2>
      </section>

      <Component.Banner />

      <section>
        <Component.Content />
      </section>
    </main>
  )
}
