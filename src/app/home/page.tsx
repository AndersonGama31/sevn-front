import * as Component from '@/components'

import Styles from './home.module.css'

export default function HomePage() {
  return (
    <main className={Styles.main}>
      <Component.Banner />

      <section>
        <Component.Headline />
        <Component.ImageNewsCard />
        <Component.ImageNewsCard />
      </section>
    </main>
  )
}
