import React, { useContext, useState, useTheme } from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultTheme, ThemeContext } from "../themes";
import { MobileView } from "../layout/Views";
import posed from "react-pose";

/**
 * A class representing a mobile nav.
 *
 * This class is used by NavigationBar, and should be refactored and added to this class
 * in the future.
 */
function MobileNav(props) {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  // Generates the mobile menu
  let generateLinks = () => {
    let jsx = [];

    props.links.map(value =>
      jsx.push(
        <NavButton
          to={value.path}
          label={value.name}
          active={value.isActive()}
          style={`margin-bottom: 10px;`}
        />
      )
    );
    return jsx;
  };

  const buttonWidth = "63px";

  const StyledMobileNav = styled.div`
    display: none;
    z-index: 1;
    align-self: baseline;
    ${new MobileView(`display: flex!important;`)}
    flex-direction: column;
    width: ${buttonWidth};
  `;

  return (
    <StyledMobileNav>
      <MobileNavButton
        buttonWidth={buttonWidth}
        onClick={() => {setMobileNavVisible(true)}}
      >
        <FontAwesomeIcon icon={faBars} />
      </MobileNavButton>

      <MenuContainer visible={mobileNavVisible}>
        {generateLinks()}
      </MenuContainer>
    </StyledMobileNav>
  );
}
MobileNav.defaultProps = {
  theme: DefaultTheme.navbar,
  show: false
};

function MobileNavButton(props) {
  const theme = useContext(ThemeContext).navbar;

  const StyledNavButton = styled.div`
    display: flex;
    width: ${props.buttonWidth};
    & * {
      height: ${theme.height};
      color: ${theme.color};
      margin: 0 20px;
      font-size: 25px;
      transition: 0.2s;
    }
    &:hover {
      cursor: pointer;
      & * {
        color: ${theme.button.hoverColor};
      }
    }
  `;
  return <StyledNavButton>{props.children}</StyledNavButton>;
}

function MenuContainer(props) {
  const theme = useContext(ThemeContext);

  const StyledLinkContainer = styled.div`
    background-color: ${theme.navbar.backgroundColor};
    display: flex;
    flex-direction: column;
  `;

  const Box = posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  });

  return (
    <div onClick={() => {}}>
      <Box pose={props.visible ? "visible" : "hidden"}>
        <StyledLinkContainer>{props.children}</StyledLinkContainer>
      </Box>
    </div>
  );
}
MenuContainer.defaultProps = {
  visible: false,
  onClick: () => {console.log("Navbar clicked")}
};

export default MobileNav;
