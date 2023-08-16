import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { DARK_BLUE_COLOR, WHITE_COLOR } from '@/app/color'
import { getTheme } from '@/hook/useChangeTheme';
import LoacationIconSVG from '../../svg/loacationIconSVG';
import MailIconSVG from '../../svg/mailIconSVG';

const TypographyStyle = {
  color: "inherit",
  marginLeft: "8px",
  fontSize: "inherit",
  fontFamily: "inherit"
}

export default function Info() {
  const currentTheme = getTheme();
  return (
    <List>
      <ListItem sx={{
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: "0",
        fontSize: {
          sx: "16px",
          lg: "18px"
        }
      }}>
        <LoacationIconSVG/>
        <Typography variant="body2" sx={TypographyStyle}>
          12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP.HCM
        </Typography>
      </ListItem>
      <ListItem>
        <MailIconSVG/>
        <Typography variant="body2" sx={TypographyStyle}>
          iuh@ebook.edu.com
        </Typography>
      </ListItem>
    </List>
  )
}


