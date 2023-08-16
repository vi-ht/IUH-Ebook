"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import BannerGroup from './banner';
import Favourite from './favorite';
import Recommend from './recommend';
import ForYou from './foryou';
import Carousel from './carousel';

const images = ["/images/test/test.png", "/images/test/test1.png", "/images/test/test3.png"]

export default function Main() {

  return (
    <Box sx={{
      flexGrow: 1,
      margin: "32px 0 32px 0"
    }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <BannerGroup />
        </Grid>
        <Grid xs={12}>
          <Carousel images={images} />
        </Grid>
        <Grid xs={12}>
          <Recommend />
        </Grid>
        <Grid xs={12}>
          <Favourite />
        </Grid>
        <Grid xs={12}>
          <ForYou />
        </Grid>
      </Grid>
    </Box>
  )
}
