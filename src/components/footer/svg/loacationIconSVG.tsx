import React from 'react'
import { DARK_BLUE_COLOR, WHITE_COLOR } from '@/app/color'
import { getTheme } from '@/hook/useChangeTheme';

export default function LoacationIconSVG() {
    const currentTheme = getTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 17 21" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.1992 9.00051C11.1992 7.61924 10.08 6.5 8.69973 6.5C7.31845 6.5 6.19922 7.61924 6.19922 9.00051C6.19922 10.3808 7.31845 11.5 8.69973 11.5C10.08 11.5 11.1992 10.3808 11.1992 9.00051Z" stroke={`${currentTheme ? DARK_BLUE_COLOR : WHITE_COLOR}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8.69873 19.5C7.50025 19.5 1.19922 14.3984 1.19922 9.06329C1.19922 4.88664 4.55632 1.5 8.69873 1.5C12.8411 1.5 16.1992 4.88664 16.1992 9.06329C16.1992 14.3984 9.89721 19.5 8.69873 19.5Z" stroke={`${currentTheme ? DARK_BLUE_COLOR : WHITE_COLOR}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
