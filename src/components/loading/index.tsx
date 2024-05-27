'use client'

import React from 'react'
import { Oval } from 'react-loader-spinner'

import Styles from './loading.module.css'

export const Loading = () => {
  return (
    <div className={Styles.container}>
      <Oval
        visible={true}
        height="100"
        width="100"
        color="#ebeff1"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}
