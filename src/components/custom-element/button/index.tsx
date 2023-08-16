import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ content, width }: any) {
    return (
        <Stack spacing={2} direction="row" position="relative">
            <Button variant="contained"
                sx={{
                    backgroundColor: "#F3633E",
                    width: `${width}px`,
                    height: "37px",
                    borderRadius: "8px",
                    color: "white",
                    boxShadow: "none",
                    boxSizing: "border-box",
                    textTransform: "capitalize",
                    fontFamily: "inherit",
                    zIndex: "2"
                }}
            >
                {content}
            </Button>
            <div style={{
                width: `${width - 2}px`,
                height: "36px",
                border: "1px solid #F3633E",
                backgroundColor: "transparent",
                borderRadius: "8px",
                position: "absolute",
                top: "5px",
                left: "-10px",
                boxSizing: "border-box",
                
            }}></div>
        </Stack>
    );
}