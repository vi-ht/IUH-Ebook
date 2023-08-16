import React from 'react'
import BookCard from '../card'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SectionHeader from '../section-header';
import { WHITE_COLOR, LIGHT_DARK } from '@/app/color'
import { getTheme } from '@/hook/useChangeTheme'

export default function Favorite() {
  const currentTheme = getTheme();
  const book = {
    title: "Kế toán tài chính",
    type: "Kế toán",
    code: " MS 001",
    price: "65.000",
    download: "+3k",
    isBought: false,
    isFavorite: true, 
    isRecommend: false
  }
  return (
    <Box sx={{
      flexGrow: 1,
      backgroundColor: `${currentTheme ? WHITE_COLOR : LIGHT_DARK}`,
      padding: { xs: "25px 0 25px 16px", md: "25px 0 25px 35px" },
      borderRadius: { xs: 0, md: "16px" },
      marginBottom: "43px"
    }}>
      <SectionHeader chipContent="Tiếp tục đọc hoặc mua ngay" title="Yêu thích" />
      <Box
        className="scroll"
        sx={{
          overflowX: "scroll",
          overflowY: "hidden"
        }} ><Stack
          direction="row"
          spacing="18px"
          justifyContent={{ xs: "flex-start", lg: "space-between" }}
          sx={{
            flexGrow: 1, width: "1242px", mb: 1
          }}
          alignItems="center"
        >
          {
            [0, 1, 2, 3, 4, 5, 6].map((item: number) => (
              <BookCard key={item} book={book}/>
            ))
          }
        </Stack >
      </Box>
    </Box >
  )
}




