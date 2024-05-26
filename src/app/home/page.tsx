import * as Component from '@/components'

import Styles from './home.module.css'

export default function HomePage() {
  return (
    <main className={Styles.main}>
      <Component.Banner />

      <section>
        <Component.Headline />

        <div className={Styles.newsCards}>
          <Component.ImageNewsCard />
          <Component.ImageNewsCard />
        </div>
      </section>

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
