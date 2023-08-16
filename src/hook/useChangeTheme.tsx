import { ThemeContext } from "@/app/layout";
import React from "react";
export const getTheme = () => {
    const { currentTheme }: any = React.useContext(ThemeContext);
    return currentTheme;
}