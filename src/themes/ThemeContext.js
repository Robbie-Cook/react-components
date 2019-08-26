import React from "react";
import DefaultThemeObject from "./DefaultThemeObject";

/** 
 * Provides an easy way to adjust themes for an individual project
 */
const ThemeContext = React.createContext(DefaultThemeObject)

export default ThemeContext
