import React from "react"
import DefaultTheme from "../themes/DefaultTheme"

// Provides an easy way to adjust themes for an individual project
const ThemeContext = React.createContext(DefaultTheme)

export default ThemeContext