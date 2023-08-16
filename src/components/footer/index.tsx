"use client"
import * as React from 'react';
import { getTheme } from '@/hook/useChangeTheme';
import TopBar from './top-bar';
import BottomBar from './bottom-bar';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box>
      <TopBar />
      <BottomBar />
    </Box>
  )
}




