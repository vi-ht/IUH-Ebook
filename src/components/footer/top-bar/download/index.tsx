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

export default function DownLoad() {
  return (
    <List>
      <ListItem sx={{ listItemStyle }}>
        <Typography
          variant="body2"
          sx={{
            color: "inherit",
            fontSize: "inherit",
            fontFamily: "inherit"
          }}>
          Tải ứng dụng
        </Typography>
      </ListItem>
      <ListItem sx={{ ...listItemStyle, gap: "16px" }}>
        <div style={{
          backgroundColor: "#F5F5FA",
          padding: "10px", borderRadius: "12px",
          fontFamily: "inherit"
        }}>
          <Image src="/images/qrcode.svg" width={60} height={60} alt="logo"></Image>
        </div>
      </ListItem>
    </List>
  )
}


