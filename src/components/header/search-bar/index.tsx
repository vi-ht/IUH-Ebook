"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Image from 'next/image';
import BasicButtons from '../../custom-element/button';
import { LIGHT_GRAY_COLOR, WHITE_COLOR, HARD_DARK_COLOR } from '@/app/color'
import { getTheme } from '@/hook/useChangeTheme';


export default function SearchBar() {
    const currentTheme = getTheme();

    return (
        <Box
            sx={{
                padding: 0,
                margin: 0,
                mr: 3,
                ml: {
                    sx: 0,
                    md: 3,
                },
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: { xs: "flex-start", md: "center" },
                alignItems: 'center',
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: "40%",
                    lg: "55%",
                    xl: "60%"
                },
                color: `${LIGHT_GRAY_COLOR}`
            }}>
            < FormControl sx={{
                m: 1, ml: -1, width: {
                    xs: "100%",
                    md: "75%"
                },
            }}>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<Image src="/images/Union.svg" width={19} height={19} alt="logo" ></Image>}
                    sx={{ height: "40px", marginLeft: "10px", maxWidth: "100%", borderRadius: "8px", backgroundColor: `${currentTheme ? WHITE_COLOR : HARD_DARK_COLOR}`, border: `${currentTheme ? "none" : "#2B3035"}`, color: "inherit", fontFamily: "inherit" }}
                />
            </FormControl >
            <Box
                sx={{
                    display: {
                        xs: "none",
                        md: "block"
                    },
                }}
            ><BasicButtons content="Tìm kiếm" width={99} /></Box>
        </Box >
    );
}