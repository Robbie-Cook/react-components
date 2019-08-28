import React from "react"
import DefaultThemeObject from "./DefaultThemeObject"
import lodash from "lodash";

/**
 * A manager for adding themes
 */
export default class ThemeManager {
    static getTheme(newTheme) {
        return lodash.merge(DefaultThemeObject, newTheme)
    }
}