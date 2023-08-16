import React from 'react'
import BookCard from '../card'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SectionHeader from '../section-header';
import { PURPLE_COLOR, WHITE_COLOR, LIGHT_DARK } from '@/app/color'
import { getTheme } from '@/hook/useChangeTheme'
import "./style.css"

const book = {
  title: "Kế toán tài chính",
  type: "Kế toán",
  code: " MS 001",
  price: "65.000",
  download: "+3k",
  isBought: false,
  isFavorite: false,
  isRecommend: true
}

export default function Recommend() {
  const currentTheme = getTheme();
  const layout = {
    flexGrow: 1,
    backgroundColor: `${currentTheme ? WHITE_COLOR : LIGHT_DARK}`,
    padding: { xs: "25px 0 25px 16px", md: "25px 0 25px 35px" },
    borderRadius: { xs: 0, md: "16px" },
    marginBottom: "43px",
  }
  return (
    <Box sx={layout}>
      <SectionHeader chipContent="Những tài liệu hữu ích nhất trong kì mới" title="Đề xuất" />
      <Box
        className="scroll"
        sx={{
          overflowX: "scroll",
          // overflowY: "hidden"
        }} >
        <Stack
          direction="row"
          spacing="18px"
          justifyContent={{ xs: "flex-start", lg: "space-between" }}
          alignItems="center"
          sx={{
            flexGrow: 1, width: "1242px", mb: 1
          }}
        >
          {
            [0, 1, 2, 3, 4, 5, 6].map((item: number) => (
              <BookCard key={item} book={book} />
            ))
          }
        </Stack >
      </Box>
    </Box >
  )
}




