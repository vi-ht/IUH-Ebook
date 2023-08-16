import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

const TypographyStyle = {
  color: "inherit",
  marginLeft: "8px",
  fontSize: "inherit",
  fontFamily: "inherit"
}

const ListItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  paddingBottom: "0",
  marginBottom: "10px",
  fontSize: "inherit"
}

export default function NavList() {
  return (
    <List>
      <ListItem sx={ListItemStyle}>
        <Typography variant="body2" sx={TypographyStyle}>
          Trang chủ
        </Typography>
      </ListItem>
      <ListItem sx={ListItemStyle}>
        <Typography variant="body2" sx={TypographyStyle}>
          Thư viện
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="body2" sx={TypographyStyle}>
          Đăng nhập
        </Typography>
      </ListItem>
    </List>
  )
}


