"use client"
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from "../app/page.module.css"
import { Inter } from 'next/font/google'
import ScrollToTopButton from '@/components/custom-element/scroll-to-top-button'
import { createContext, useState } from 'react'

export const ThemeContext = createContext({});
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState(true)
  return (
    <html lang="en">
       <head>
        <title>IUH Ebook | Landing Page</title>
        <meta name='description' content='Description' />
      </head>
      <ThemeContext.Provider value={{ currentTheme: theme, handleChangeTheme: setTheme }}>
        <body className={theme ? styles.bodyContainer : styles.bodyContainerDark}>
          <header className={theme ? styles.outsideContainer : styles.outsideContainerDark}>
            <section className={styles.mainContainer}>
              <Header />
            </section>
          </header>
          <main className={styles.mainContainerTrans}>
            {children}
          </main>
          <footer className={theme ? styles.outsideContainer : styles.outsideContainerDark}>
            <section className={styles.mainContainer}>
              <Footer />
            </section>
          </footer>
          <ScrollToTopButton />
        </body>
      </ThemeContext.Provider>
    </html >

  )
}
