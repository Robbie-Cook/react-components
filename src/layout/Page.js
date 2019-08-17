// Root container for a page

/* Imports */
/* Stylesheets etc. */
import React, { Component } from "react";
import styled from "styled-components";
import { DefaultTheme } from "../themes";
import { Dimensions } from "../utilities";
import { MyHelmet } from "../headers";

import NavigationBar from "../navigation/NavigationBar";
import { MobileView } from "../layout/Views";

// Styles for component
const StyledPage = styled.div`
  background-color: ${DefaultTheme.backgroundColor};

  display: flex;
  flex-direction: column;
  padding: ${new Dimensions(40, 90, 0, 90)};

  // Mobile styles
  ${new MobileView(`
    flex-direction: column;
    padding: ${new Dimensions(20, 30)}; 
  `)}
`

/* Navigation links, which are passed to navbar.js */


/**
 * Define a React Context for all child components to use
 * Made to make finding DefaultTheme easier
 */
const DefaultThemeContext = React.createContext(DefaultTheme)

// Main Page component
class WebPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DefaultThemeContext.Provider value={DefaultTheme}>
        <MyHelmet /> {/* SEO Stuff */}
        <div>
          <NavigationBar />
          <div style={this.props.style}>
            <StyledPage style={this.props.style}>
              {this.props.children}
            </StyledPage>
          </div>
        </div>
      </DefaultThemeContext.Provider>
    )
  }
}

export default WebPage
