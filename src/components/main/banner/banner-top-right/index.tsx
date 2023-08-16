import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ButtonStyle = {
  padding: 0,
  height: "17px",
  width: "81px",
  fontFamily: "inherit",
  fontSize: "8px",
  background: "linear-gradient(90deg, #FF7E21 0%, #F90000 100%)",
  borderRadius: "24px",
  textTransform: "capitalize",
  marginLeft: "4px"
}

export default function BannerTopRight() {
  return (
    <div style={{ width: "100%", height: 139, padding: 0, position: "relative", }}>
      <img
        src="/images/banner/banner.jpg"
        alt="School banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "0% 0%",
          borderRadius: "16px"
        }}>
      </img>
      <Box
        sx={{
          position: "absolute",
          top: "15px",
          left: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "6px"
        }}>
        <img
          src="/images/banner/slogan.svg"
          alt="School banner"
        >
        </img>
        <Button variant="contained" sx={ButtonStyle}>
          Khám phá ngay
        </Button>
      </Box>

      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <img
          src="/images/banner/books.svg"
          alt="School banner"
          style={{ position: "absolute", bottom: "-20px", right: "100px" }}
        >
        </img>
      </Box>
      <img
        src="/images/banner/phone.svg"
        alt="School banner"
        style={{ position: "absolute", top: "-25px", right: "-30px" }}
      >
      </img>
    </div>
  )
}
