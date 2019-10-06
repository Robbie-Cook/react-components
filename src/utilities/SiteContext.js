import React from 'react';
import MyLink from './MyLink';

/**
 * Global site information for website
 */
const DefaultSiteContext = {
  sitename: 'My Dank Website',
  links: [
    new MyLink('Home', '/'),
    new MyLink('News', '/news'),
    new MyLink('Link3', '/link3'),
  ],
};

/**
 * Provides information about the site
 */
const SiteContext = React.createContext(DefaultSiteContext);

export { SiteContext, DefaultSiteContext };
