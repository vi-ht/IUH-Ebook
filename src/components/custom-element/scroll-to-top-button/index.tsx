import React from 'react'
import Image from 'next/image'
import Styles from "./style.module.css"

export default function ScrollToTopButton() {
  return (
    <div className={Styles.outsideContainer}>
      <div  className={Styles.middleContainer}>
        <div className={Styles.insideContainer}>
            <Image src="/images/backtotop.svg" alt="back to top icon" width={16} height={20}></Image>
        </div>
      </div>
    </div>
  )
}
