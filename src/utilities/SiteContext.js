import React from "react";
import MyLink from "./MyLink";

/**
 * Global site information for website
 */
class DefaultSiteContext {
  static name = "My Website";
  static links = [new MyLink("Home", "/"), new MyLink("News", "/news")];
}

/**
 * Provides information about the site
 */
const SiteContext = React.createContext(DefaultSiteContext);

export { SiteContext, DefaultSiteContext };
