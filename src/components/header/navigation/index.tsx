"use client"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import ChangeThemeButton from '@/components/custom-element/change-theme-button';
import UserSVG from '../svg/userSVG';
import HomeSVG from "../svg/homeSVG";
import CartButton from '@/components/custom-element/cart-button';
import { WHITE_COLOR, PURPLE_COLOR } from '@/app/color'
import { getTheme } from '@/hook/useChangeTheme';


export default function Navigation() {
    const currentTheme = getTheme();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: {
                xs: "auto",
                md: "341px"
            }, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "-50px" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItem sx={{
                padding: "0", display: {
                    xs: "none",
                    md: "block"
                },
            }}>
                <HomeSVG width={14} height={15}/>
                <Link href="" style={{ marginLeft: "4px", color: `${currentTheme ? PURPLE_COLOR : WHITE_COLOR}`, textDecoration: "none" }}>Trang chủ</Link>
            </ListItem>
            <ListItem sx={{
                padding: "0", display: {
                    xs: "none",
                    md: "block"
                },
            }}>
                <UserSVG width={11} height={15}/>
                <Link href="" style={{ marginLeft: "4px", color: "#9DA4AE", textDecoration: "none" }}>Tài Khoản</Link>
            </ListItem>
            <ListItem sx={{ padding: "0", margin: "0", width: "50px" }}>
                <ChangeThemeButton />
            </ListItem>
            <ListItem sx={{ width: "5px", color: `${currentTheme ? "#9DA4AE" : WHITE_COLOR}`, fontSize: "20px" }}>
                <span>|</span>
            </ListItem>
            <ListItem sx={{ padding: "0", marginLeft: "8px", width: "35px" }}>
                <CartButton num={50} />
            </ListItem>
        </List>
    );
}