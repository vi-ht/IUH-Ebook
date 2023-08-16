import React from 'react'
import BookCard from '../card'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicButtons from '@/components/custom-element/button';
import SectionHeader from '../section-header';
import { WHITE_COLOR, LIGHT_DARK } from '@/app/color'
import { getTheme } from '@/hook/useChangeTheme'

const book = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  isBought: false,
  isFavorite: false,
  isRecommend: false
}



export default function ForYou() {
  const currentTheme = getTheme();
  return (
    <Box sx={{
      flexGrow: 1,
      backgroundColor: `${currentTheme ? WHITE_COLOR : LIGHT_DARK}`,
      overflow: "hidden",
      borderRadius: { xs: 0, md: "16px" },
      marginBottom: "43px",
      position: "relative",
      padding: "25px 35px"
    }}>
      <div style={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        height: "254px",
        backgroundImage: `${currentTheme ? "linear-gradient(#D9D3FF, #E7E5FB, white)" : "none"}`,
      }}></div>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="45" viewBox="0 0 180 45" fill="none">
          <path d="M-4 0.862061H180L171.306 25.6325C169.153 31.7659 163.504 35.9874 157.011 36.3135L-4 44.4006V0.862061Z" fill="url(#paint0_linear_0_2684)" />
          <defs>
            <linearGradient id="paint0_linear_0_2684" x1="-4" y1="22.6313" x2="180" y2="22.6313" gradientUnits="userSpaceOnUse">
              <stop stopColor="#919BFF" />
              <stop offset="1" stopColor="#210CAE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ position: "absolute", top: "8px", left: "10px", zIndex: 1 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
          <path d="M18.8895 7.28292C18.8895 6.71754 18.4311 6.25915 17.8657 6.25915H16.1181C16.5704 5.81303 16.8599 5.22822 16.8599 4.50797C16.8599 3.62112 16.3505 2.65775 14.9208 2.65775C13.0396 2.65775 11.4681 4.66077 10.7297 5.7836C9.99081 4.66103 8.37119 2.658 6.49025 2.658C5.06055 2.658 4.55122 3.62138 4.55122 4.50823C4.55122 5.2282 4.84862 5.81329 5.31009 6.2594H3.53281C2.96743 6.2594 2.50903 6.7178 2.50903 7.28318V10.3476H3.54177V17.0111C3.54177 17.5765 4.00015 18.0349 4.56555 18.0349H16.8458C17.4111 18.0349 17.8696 17.5765 17.8696 17.0111V10.3474H18.8895V7.28292H18.8895ZM14.9208 3.68178C15.5538 3.68178 15.8361 3.94772 15.8361 4.50824C15.8361 5.64541 14.5668 6.25889 13.3731 6.25889H11.6401C12.3675 5.17855 13.6478 3.68178 14.9208 3.68178ZM6.49024 3.6818C7.76356 3.6818 9.09216 5.17856 9.81955 6.25865H8.08604C6.89231 6.25865 5.57496 5.62928 5.57496 4.49212C5.57496 3.93185 5.85727 3.6818 6.49024 3.6818ZM17.8657 9.32357H11.2111V7.28292H17.8657V9.32357ZM3.5328 7.28292H10.1874V9.32357H3.5328V7.28292ZM4.56553 10.3474H10.1874V17.0109H4.56553V10.3474ZM16.846 17.0109H11.2111V10.3474H16.846V17.0109Z" fill="white" />
        </svg>
        <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: "18px", fontWeight: "700", color: "white", fontFamily: "inherit" }}>
          Dành cho bạn
        </Typography>
      </Stack>
      <SectionHeader chipContent="Tiếp tục đọc hoặc mua ngay" title="Yêu thích" hasTitle />
      <Grid container columnSpacing="36px" rowSpacing="54px" justifyContent="center"
        alignItems="center">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 27, 29]
            .map((item: number, index) => {
              return (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                  <BookCard book={book} />
                </Grid>
              )
            }
            )
        }

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
          <BasicButtons content="Xem thêm" width={112} />
        </Grid>
      </Grid>
    </Box >
  )
}




