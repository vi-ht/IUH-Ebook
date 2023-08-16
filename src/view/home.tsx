"use client"

import Main from '@/components/main'
import Header from '@/components/header'
import Footer from '@/components/footer'
import moduleStyles from "../app/page.module.css"
import ScrollToTopButton from '@/components/custom-element/scroll-to-top-button'
import { useState } from 'react'
import ThemeContext from '@/hook/ThemeContext'

export default function HomeView() {
    const [theme, setTheme] = useState(true)
    return (
        <ThemeContext.Provider value={{ currentTheme: theme, handleChangeTheme: setTheme }}>
            <body className={theme ? moduleStyles.bodyContainer : moduleStyles.bodyContainerDark}>
                <header className={theme ? moduleStyles.outsideContainer : moduleStyles.outsideContainerDark}>
                    <section className={moduleStyles.mainContainer}>
                        <Header />
                    </section>
                </header>
                <main className={moduleStyles.mainContainerTrans}>
                    <main className={moduleStyles.main}>
                        <div className={moduleStyles.description}>
                            <Main />
                        </div>
                    </main>
                </main>
                <footer className={theme ? moduleStyles.outsideContainer : moduleStyles.outsideContainerDark}>
                    <section className={moduleStyles.mainContainer}>
                        <Footer />
                    </section>
                </footer>
                <ScrollToTopButton />
            </body>
        </ThemeContext.Provider>
    )
}
