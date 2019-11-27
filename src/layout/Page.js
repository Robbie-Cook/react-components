// Root container for a page

/* Imports */
/* Stylesheets etc. */
import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
// import MyHelmet from "../headers/MyHelmet";
import NextHelmet from '../headers/NextHelmet';
import { MobileView } from '../layout/Views';
import NavigationBar from '../navigation/NavigationBar';
import { Dimensions } from '../utilities';
import { SiteContext } from '../utilities/SiteContext';
import PropTypes from 'prop-types';

/* Navigation links, which are passed to navbar.js */

/**
 * Define a React Context for all child components to use
 * Made to make finding DefaultTheme easier
 */

// Main Page component
export default function Page({ theme, site, myStyles, children }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Styles for component
  const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${theme && theme.page.padding};

    ${new MobileView(`
      flex-direction: column;
      padding: ${theme && theme.page.mobilePadding}; 
    `)}
  `;

  return (
    <>
      <NavigationBar title={theme && theme.navbar.title} links={site && site.links} />
      <div style={myStyles}>
        {/* Only display contents if loaded */}
        <StyledPage style={myStyles}>{children}</StyledPage>
      </div>
    </>
  );
}
Page.defaultProps = {};
Page.propTypes = {
  style: PropTypes.object,
};
