'use client'

import React from 'react'

import { ArrowLeft } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import styles from './navbar.module.css'

export const Navbar: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <nav className={styles.container}>
      {pathname !== '/home' && (
        <div onClick={() => router.back()}>
          <ArrowLeft color="white" />
        </div>
      )}
      <h1>SEVN NEWS</h1>
    </nav>
  )
}
