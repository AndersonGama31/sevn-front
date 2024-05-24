import React from 'react'

import Styles from './headline.module.css'

export const Headline: React.FC = () => {
  return (
    <div className={Styles.headline}>
      <p>Economia</p>
      <h1>Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC</h1>
    </div>
  )
}
