import React from "react";
import ThemeContext from "@/hook/ThemeContext"

export const getTheme = () => {
    const { currentTheme }:any = React.useContext(ThemeContext);
    return currentTheme;
}