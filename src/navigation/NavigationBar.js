import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import MobileNav from "../navigation/MobileNav";
import { ThemeContext } from "../themes";
import Spacer from "../ui-components/Spacer";
import { SiteContext } from "../utilities/SiteContext";
import { Text } from "../utilities/Typography";
import NavButton from "./NavButton";
import MobileNav from "./mobile/MobileNav";
import { MobileView } from "../layout/Views";

/** Represents a navbar element */
function NavBar(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  });

  const theme = useContext(ThemeContext);

  const StyledNavBar = styled.div`
    height: ${theme.navbar.height};
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.navbar.backgroundColor};
    padding: ${theme.navbar.padding};
    box-sizing: border-box;

    ${new MobileView(`
      padding: ${theme.navbar.mobilePadding};
    `)}
  `;

  const links = (() => {
    let mylinks = [];
    props.links.forEach(value => {
      mylinks.push(
        <NavButton
          to={value.path}
          label={value.name}
          active={value.isActive()}
          style={`
            margin: 0 20px 0 0; 
          `}
        />
      );
    });
    return mylinks;
  })();

  const Title = styled.p`
    margin: 0;
    color: ${theme.navbar.color};
    margin-bottom: 0;
    font: ${theme.navbar.title.font};
  `;

  const LinksWrapper = styled.div`
    display: flex;
    ${new MobileView(`display: none;`)}
    height: ${theme.navbar.height};
    line-height: ${theme.navbar.height};
    align-items: center;
  `;

  return (
    <StyledNavBar>
      <MobileNav links={props.links} theme={theme} />
      <Title>{theme.navbar.title.name}</Title>
      <Spacer width="55px" />
      <LinksWrapper>{links}</LinksWrapper>
    </StyledNavBar>
  );
}
NavBar.defaultProps = {
  title: "Testing title",
  links: [],
};

/**
 * Navigation bar UI component (version 2, without material-ui)
 */
export default function NavigationBar(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Careful -- make sure that react is linked to parent when using npm link and useContext
  const theme = useContext(ThemeContext).navbar;
  const site = useContext(SiteContext);

  return (
    <NavBar links={props.links} height={theme.height} />
  );
}
NavigationBar.defaultProps = {
  title: "My Website",
  links: []
};
