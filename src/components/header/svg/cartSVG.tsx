import React from 'react'
import { PURPLE_COLOR, WHITE_COLOR } from '@/app/color'
import { getTheme } from '@/hook/useChangeTheme'


export default function CartSVG() {
    const currentTheme = getTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 23 22" fill="none">
            <path d="M1.22974 1.39648L3.5065 1.79054L4.5606 14.3489C4.64488 15.3745 5.50195 16.1615 6.53088 16.1582H18.4719C19.4537 16.1604 20.2867 15.438 20.4257 14.466L21.4645 7.28761C21.5805 6.48527 21.0234 5.74095 20.2221 5.62492C20.1521 5.61507 3.8721 5.60959 3.8721 5.60959" stroke={currentTheme ? PURPLE_COLOR : WHITE_COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.05066 19.9528C6.38014 19.9528 6.64612 20.2198 6.64612 20.5482C6.64612 20.8777 6.38014 21.1448 6.05066 21.1448C5.72119 21.1448 5.4552 20.8777 5.4552 20.5482C5.4552 20.2198 5.72119 19.9528 6.05066 19.9528Z" fill={currentTheme ? PURPLE_COLOR : WHITE_COLOR} stroke={currentTheme ? PURPLE_COLOR : WHITE_COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M18.3981 19.9528C18.7275 19.9528 18.9946 20.2198 18.9946 20.5482C18.9946 20.8777 18.7275 21.1448 18.3981 21.1448C18.0686 21.1448 17.8026 20.8777 17.8026 20.5482C17.8026 20.2198 18.0686 19.9528 18.3981 19.9528Z" fill={currentTheme ? PURPLE_COLOR : WHITE_COLOR} stroke={currentTheme ? PURPLE_COLOR : WHITE_COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.53125 12.2834H10.5666" stroke={currentTheme ? PURPLE_COLOR : WHITE_COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
