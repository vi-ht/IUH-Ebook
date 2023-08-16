"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import NavList from './nav-list';
import Info from './info';
import Payment from './payment';
import DownLoad from './download';
import { getTheme } from '@/hook/useChangeTheme';
import { DARK_BLUE_COLOR, WHITE_COLOR } from '@/app/color'

export default function TopBar() {
  const currentTheme = getTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: "16px",
        color: `${currentTheme ? DARK_BLUE_COLOR : WHITE_COLOR}`,
        display: { xs: "none", md: "block" },
      }}>
      <Grid container spacing={2}
        sx={{
          fontSize: {
            sx: "16px",
            lg: "18px"
          }
        }}>
        <Grid xs={2} >
          {currentTheme ?
            <Image src="/images/Logo.svg" width={126} height={58} alt="logo"></Image>
            :
            <Image src="/images/logo-light.svg" width={126} height={58} alt="logo"></Image>
          }
        </Grid>
        <Grid xs={3.5} lg={3}>
          <Info />
        </Grid>
        <Grid xs={2} lg={1.8} >
          <NavList />
        </Grid>
        <Grid xs={3} lg={3.2} >
          <Payment />
        </Grid>
        <Grid xs={1.5} lg={2}>
          <DownLoad />
        </Grid>
        <Grid xs={12}>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#6C737F",
              fontFamily: "inherit"
            }}>
            Copyright © 2023 IUH University Viet Nam
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}




