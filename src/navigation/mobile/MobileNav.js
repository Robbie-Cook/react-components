import React, { useContext, useState } from "react";
import posed from "react-pose";
import styled from "styled-components";
import { MobileView } from "../../layout/Views";
import { DefaultTheme, ThemeContext } from "../../themes";
import NavButton from "../NavButton";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

/**
 * A class representing a mobile nav.
 *
 * This class is used by NavigationBar, and should be refactored and added to this class
 * in the future.
 */
function MobileNav(props) {

  const theme = useContext(ThemeContext);

  // Generates the mobile menu
  const generateLinks = () => {
    const jsx = [];

    props.links.map((value, index) => {
      jsx.push(
        <NavButton
          key={index}
          to={value.path}
          label={value.name}
          active={value.isActive()}
          style={`margin-bottom: 10px; background-color: transparent;`}
        />
      );
    });
    return jsx;
  };

  const menuNavWidth = "50px";

  const StyledMobileNav = styled.div`
    display: none;
    z-index: 1;
    align-self: baseline;
    ${new MobileView(`display: flex!important;`)}
    flex-direction: column;
    width: ${menuNavWidth};
    height: ${theme.navbar.height};
  `;

  return (
    <StyledMobileNav>
      <MobileMenu links={generateLinks()} height={theme.navbar.height}></MobileMenu>
    </StyledMobileNav>
  );
}
MobileNav.defaultProps = {
  theme: DefaultTheme,
  height: "60px",
};

export default MobileNav;
