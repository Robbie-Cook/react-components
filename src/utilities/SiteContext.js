import React from "react";
import MyLink from "./MyLink";

/**
 * Global site information for website
 */
class DefaultSiteContext {
  static name = "My Dank Website";
  static links = [new MyLink("Home", "/"), new MyLink("News", "/news"), new MyLink("Link3", '/link3')];
}

/**
 * Provides information about the site
 */
const SiteContext = React.createContext(DefaultSiteContext);

export { SiteContext, DefaultSiteContext };
