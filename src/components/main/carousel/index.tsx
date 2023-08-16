
import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { positionIncrement } from './handleCarousel';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PURPLE_COLOR, WHITE_COLOR } from "@/app/color"
import { getTheme } from "@/hook/useChangeTheme";

export default function Carousel({ images }: any) {
    const currentTheme = getTheme();
    const pos = React.useRef(0);
    const matches428 = useMediaQuery('(max-width:428px)');
    const matches500 = useMediaQuery('(min-width:428px) and (max-width:500px)');
    const matches600 = useMediaQuery('(min-width:500px) and (max-width:600px)');
    const matches700 = useMediaQuery('(min-width:600px) and (max-width:700px)');
    const matches800 = useMediaQuery('(min-width:700px) and (max-width:800px)');

    React.useEffect(() => {
        let interval = setInterval(() => {
            const currentPos = positionIncrement(pos.current, images.length, currentTheme);
            pos.current = currentPos;
            console.log(pos)
        }, 5000)
        return (() => {
            clearInterval(interval);
        })
    }, [])

    return (
        <Box sx={{
            marginBottom: "16px",
            marginTop: "70px",
            display: { xs: "block", md: "none" },
            width: "100%",
            maxHeight: "297px"
        }}>
            <Box
                sx={{
                    margin: "0 16px",
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxSizing: "border-box"
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    id="carousel-container"
                    spacing={0} sx={{
                        width: "100%",
                        height: `${matches428 ? "138px" : matches500 ? "160px" : matches600 ? "200px" : matches700 ? "230px" : matches800 ? "250px" : "297px"}`,
                        transition: "all 0.5s ease-in-out"
                    }}>
                    {images.map((image: any, index: any) => <img src={image} width="100%" height="100%" style={{ objectFit: "contain", objectPosition: "50% 50%" }} key={index} />)}
                </Stack>
            </Box>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                id="carousel-item"
                spacing={2}
                sx={{
                    margin: "0 36px",
                    mt: "10px",
                    overflow: "hidden",
                    borderRadius: "16px"
                }}
            >
                {images.map((image: any, index: any) => {
                    return (<div key={index}>
                        {index === 0 ?
                            <div key={index} style={{
                                width: "20px",
                                height: "1px",
                                backgroundColor: `${currentTheme ? PURPLE_COLOR : WHITE_COLOR}`,
                                transition: "all 0.5s ease-in-out"
                            }}></div>
                            :
                            <div key={index} style={{
                                width: "20px",
                                height: "1px",
                                backgroundColor: `${currentTheme ? "rgba(216, 219, 223, 1)" : "rgba(216, 219, 223, 0.3)"}`,
                                transition: "all 0.5s ease-in-out"
                            }}></div>
                        }
                    </div>
                    )
                }
                )}
            </Stack>
        </Box>
    )
}
