import React from 'react'
import Box from '@mui/material/Box';
import { getTheme } from '@/hook/useChangeTheme';

export default function BannerLeft() {
  const currentTheme = getTheme();
  const OutSideBoxStyle = {
    width: "100%",
    paddingLeft: "5%",
    height: 297,
    borderRadius: "16px",
    position: "relative",
  }
  return (
    <Box
      sx={OutSideBoxStyle}
    >
      <Box sx={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        background: "linear-gradient(136deg, #5370FE 0%, #B46ADE 48.77%, #F766C7 100%)",
        mixBlendMode: "hard-light"
      }}></Box>
      <img
        src="/images/banner/Intersect.svg"
        alt="School banner"
        style={{ position: "absolute", bottom: 0, left: "-25px", transform: "scaleX(-1)" }}>
      </img>
      <Box sx={{
        display: {
          xs: "none",
          lg: "block"
        }
      }}>
        <img
          src="/images/banner/illustration.svg"
          alt="School banner"
          style={{ position: "absolute", bottom: "40px", left: "170px" }}>
        </img>
      </Box>
      <Box
        sx={{
          width: { md: `${519 - ((519 * 20) / 100)}px`, lg: "519px" },
          height: "100%",
          position: "absolute",
          top: "-10px",
          right: "-10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.4s ease"
        }}>
        <img
          src="/images/banner/main-slogan.svg"
          alt="School banner"
          style={{ width: "100%", height: "auto" }}>
        </img>
      </Box>
    </Box>
  )
}

