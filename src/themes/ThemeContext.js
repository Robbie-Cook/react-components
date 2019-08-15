import React from "react"
import { Colors } from "../themes"

// Provides an easy way to adjust themes for an individual project
const ThemeContext = React.createContext(Colors)

export default ThemeContext