"use client"
import styles from './page.module.css'
import Main from '@/components/main'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Main />
      </div>
    </main>
  )
}
