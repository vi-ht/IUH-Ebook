"use client"
import React from 'react'
import Styles from "./style.module.css"
import { ThemeContext } from '@/app/layout';


export default function ChangeThemeButton() {
    const { currentTheme, handleChangeTheme }: any = React.useContext(ThemeContext);
    const handleChangeState = () => {
        handleChangeTheme(!currentTheme);
    }
    return (
        <div
            className={currentTheme ? Styles.buttonContainer : Styles.buttonContainerDark}
            onClick={handleChangeState}>
            <span
                className={currentTheme ? Styles.iconLight : Styles.animLight}
                id="icon-theme">
                {currentTheme ?
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"

                    >
                        <ellipse cx="10.0286" cy="9.9911" rx="2.46693" ry="2.46693" fill="white" />
                        <path d="M10.8516 6.32328L11.2451 4.5481" stroke="white" strokeLinecap="round" />
                        <path d="M13.4794 8.54838L15.1415 7.74268" stroke="white" strokeLinecap="round" />
                        <path d="M7.28783 7.38488L5.90405 6.16797" stroke="white" strokeLinecap="round" />
                        <path d="M9.22014 13.6819L8.84546 15.3721" stroke="white" strokeLinecap="round" />
                        <path d="M12.9168 12.3395L14.2449 13.6074" stroke="white" strokeLinecap="round" />
                        <path d="M6.38048 11.0068L4.71252 11.7046" stroke="white" strokeLinecap="round" />
                    </svg>
                    :
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0279 7.06777C11.185 7.68837 10.1436 8.05507 9.01658 8.05507C6.20869 8.05507 3.93244 5.77882 3.93244 2.97093C3.93244 2.2504 4.08233 1.56488 4.35262 0.943848C2.07903 1.73139 0.446533 3.89163 0.446533 6.43315C0.446533 9.64071 3.04678 12.241 6.25434 12.241C9.24744 12.241 11.7117 9.97678 12.0279 7.06777Z" fill="#4E49D6" />
                    </svg>}
            </span>
        </div>
    )
}
