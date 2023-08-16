import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import { PURPLE_COLOR, WHITE_COLOR, GRAY_COLOR } from '@/app/color'
import { getTheme } from '@/hook/useChangeTheme'

export default function SectionHeader({ chipContent, title, hasTitle }: any) {
    const currentTheme = getTheme();
    return (
        <Stack
            direction="row"
            justifyContent={!hasTitle ? "space-between" : "flex-end"}
            sx={{
                marginBottom: "16px",
                position: "relative",
                zIndex: 1,
                width: "100%",
                color: `${currentTheme ? PURPLE_COLOR : WHITE_COLOR}`
            }}>
            {!hasTitle && <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: "18px",
                        color: "inherit",
                        fontWeight: "bold",
                        fontFamily: "inherit"
                    }}>
                    {title}
                </Typography>
                <Chip
                    label={chipContent}
                    size="small"
                    sx={{
                        backgroundColor: `${currentTheme ? "#F2EFFF" : GRAY_COLOR}`,
                        color: "inherit",
                        display: {
                            xs: "none", sm: "flex"
                        }
                    }} />
            </Stack>}
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0}
                sx={{ paddingRight: { xs: "16px", md: "36px" } }}>
                <Link
                    href=""
                    style={{
                        textDecoration: "none",
                        color: `${currentTheme ? "gray" : WHITE_COLOR}`,
                        fontSize: "12px"
                    }}>Xem tất cả</Link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 16" fill="none">
                        <path d="M8.19922 5.5L13.1992 10.5L8.19922 15.5" stroke={`${currentTheme ? GRAY_COLOR : WHITE_COLOR}`} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </Stack>
        </Stack>
    )
}
