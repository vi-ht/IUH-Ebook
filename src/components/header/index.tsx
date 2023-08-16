import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchBar from "./search-bar/index"
import Navigation from "./navigation/index"
import { getTheme } from '@/hook/useChangeTheme';
import { WHITE_COLOR, LIGHT_DARK } from '@/app/color'

export default function Header() {
  const currentTheme = getTheme();
  return (
    <Box sx={{
      width: "100%", 
      backgroundColor: `${currentTheme ? WHITE_COLOR : LIGHT_DARK}`,
      margin: "0",
      padding: "24px 16px",
      position: { xs: "fixed", md: "initial" },
      top: { xs: 0, md: "initial" },
      zIndex: 10,
      boxShadow: { xs: "0px 2px 4px 0px rgba(145, 158, 171, 0.15)", md: "none" }
    }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{
          display: {
            xs: "none",
            md: "block"
          },
        }}>
          {currentTheme ?
            <Image src="/images/Logo.svg" width={126} height={58} alt="logo"></Image>
            :
            <Image src="/images/logo-light.svg" width={126} height={58} alt="logo"></Image>}
        </Box>
        <SearchBar />
        <Navigation />
      </Stack>
    </Box>
  )
}
