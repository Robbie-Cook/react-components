import lodash from "lodash";
import DefaultThemeObject from "./DefaultThemeObject";

/**
 * A manager for adding themes
 */
export default class ThemeManager {
  static fillTheme(newTheme) {
    return lodash.merge(DefaultThemeObject, newTheme);
  }
}
