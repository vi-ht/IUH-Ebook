import React from 'react'
import Stack from '@mui/material/Stack';
import Item from './item';
import LibIconSVG from '../svg/libIconSVG';
import HomeSVG from '@/components/header/svg/homeSVG';
import DocumentIconSVG from '../svg/documentIconSVG';
import SaleIconSVG from '../svg/saleIconSVG';
import UserSVG from '@/components/header/svg/userSVG';
import { getTheme } from '@/hook/useChangeTheme';
import { DARK_BLUE_COLOR, WHITE_COLOR, LIGHT_DARK } from '@/app/color'
import Box from '@mui/material/Box';

export default function BottomBar() {
    const currentTheme = getTheme();
    const boxStyle = {
        flexGrow: 1,
        margin: "0",
        color: `${currentTheme ? DARK_BLUE_COLOR : WHITE_COLOR}`,
        display: { xs: "flex", md: "none" },
        position: "fixed",
        backgroundColor: `${currentTheme ? WHITE_COLOR : LIGHT_DARK}`,
        boxShadow: "0px -2px 4px 0px rgba(145, 158, 171, 0.15)",
        bottom: 0,
        width: "100%",
        zIndex: 5
    }
    return (
        <Box sx={boxStyle}>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    padding: "0 16px",
                    m: 0,
                    width: "100%",
                }}>
                <Item title="Trang chủ" isActive>
                    <HomeSVG width={23} height={23} />
                </Item>
                <Item title="Thư viện">
                    <LibIconSVG />
                </Item>
                <Item title="Tài liệu">
                    <DocumentIconSVG />
                </Item>
                <Item title="Khuyến mãi">
                    <SaleIconSVG />
                </Item>
                <Item title="Tài khoản">
                    <UserSVG width={18} height={23} />
                </Item>
            </Stack>
        </Box >
    )
}
