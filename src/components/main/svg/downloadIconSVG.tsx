import React from 'react'
import { GRAY_COLOR, WHITE_COLOR } from '@/app/color'
import { getTheme } from '@/hook/useChangeTheme'

export default function DownloadIconSVG() {
    const currentTheme = getTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" style={{ position: "relative", top: "-2px" }}>
            <path d="M6.25667 8.00439L6.25667 0.980469" stroke={currentTheme ? GRAY_COLOR : WHITE_COLOR} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.95776 6.29657L6.25676 8.00457L4.55576 6.29657" stroke={currentTheme ? GRAY_COLOR : WHITE_COLOR} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.95934 3.74133H9.50359C10.6907 3.74133 11.6526 4.70325 11.6526 5.89092L11.6526 8.73992C11.6526 9.92408 10.693 10.8837 9.50884 10.8837L3.0105 10.8837C1.82342 10.8837 0.86092 9.92117 0.86092 8.73408L0.86092 5.8845C0.86092 4.70092 1.82109 3.74133 3.00467 3.74133L3.55417 3.74133" stroke={currentTheme ? GRAY_COLOR : WHITE_COLOR} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
