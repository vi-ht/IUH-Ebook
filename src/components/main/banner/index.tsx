import * as React from 'react';
import Box from '@mui/material/Box';
import BannerBottomRight from './banner-bottom-right';
import BannerTopRight from "./banner-top-right/index";
import BannerLeft from './banner-left/index';


export default function BannerGroup() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={2}
      sx={{ marginBottom: "43px", display: { xs: "none", md: "grid" } }}>
      <Box gridColumn="span 8" gridRow="span 2">
        <BannerLeft />
      </Box>
      <Box gridColumn="span 4">
        <BannerTopRight />
      </Box>
      <Box gridColumn="span 4">
        <BannerBottomRight />
      </Box>
    </Box>
  )
}





