import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { GRAY_COLOR, PURPLE_COLOR } from "@/app/color"

export default function Item({ children, title, isActive }: { children: React.ReactNode, title: string, isActive?: Boolean }) {
    return (
        <Stack
            direction="column"
            spacing="2px"
            alignItems="center"
            justifyContent="center"
            sx={{
                position: "relative",
                padding: "14px 0 32px 0"
            }}>
            {children}
            <Typography
                variant="body2"
                gutterBottom
                sx={{
                    fontSize: "14px",
                    color: `${isActive ? PURPLE_COLOR : GRAY_COLOR}`,
                    textAlign: "center"
                }}>
                {title}
            </Typography>
            {isActive &&
                <div style={{
                    height: "3px",
                    width: "68px",
                    backgroundColor: PURPLE_COLOR,
                    position: "absolute",
                    top: "-4px"
                }}>
                </div>}
        </Stack>
    )
}
