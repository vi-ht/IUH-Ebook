import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Image from 'next/image'

const listItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  paddingBottom: "0",
  marginBottom: "15px"
}
const TypographyStyle = {
  color: "inherit",
  fontSize: "inherit",
  fontFamily: "inherit"
}

export default function Payment() {
  return (
    <List>
      <ListItem sx={{ listItemStyle, fontSize: "inherit" }}>
        <Typography
          variant="body2"
          sx={TypographyStyle}>
          Phương thức thanh toán
        </Typography>
      </ListItem>
      <ListItem sx={{ ...listItemStyle, gap: "16px" }}>
        <Image src="/images/momo.svg" width={36} height={36} alt="logo"></Image>
        <Image src="/images/zalo.svg" width={36} height={36} alt="logo"></Image>
        <Image src="/images/visa.svg" width={36} height={36} alt="logo"></Image>
      </ListItem>
    </List>
  )
}


