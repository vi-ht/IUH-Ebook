import React from 'react'
import Box from '@mui/material/Box';
import CartSVG from '@/components/header/svg/cartSVG'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function CartButton({ num }: any) {
    return (
        <Box sx={{ position: "relative", display: "inline", top: "3px" }}>
            <CartSVG />
            <Box sx={{
                padding: "4px",
                paddingBottom: "4px",
                backgroundColor: "red",
                height: "18px",
                width: `${num > 9 ? "auto" : "18px"}`,
                fontSize: "13px",
                color: "white",
                borderRadius: "9px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "-8px",
                left: "13px"
            }} >
                <span className={inter.className}>{num}</span>
            </Box>
        </Box>
    )
}
