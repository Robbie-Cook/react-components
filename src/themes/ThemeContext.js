import React from "react";
import lodash from "lodash";
import DefaultThemeObject from "./DefaultThemeObject";

/**
 * Provides an easy way to adjust themes for an individual project
 */
const ThemeContext = React.createContext(
  lodash.merge(DefaultThemeObject, DefaultThemeObject),
);

export default ThemeContext;
