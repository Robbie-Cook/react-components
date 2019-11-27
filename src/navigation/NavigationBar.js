import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MobileView } from "../layout/Views";
// import MobileNav from "../navigation/MobileNav";
import Spacer from "../ui-components/Spacer";
import MobileNav from "./mobile/MobileNav";
import NavButton from "./NavButton";

/** Represents a navbar element */
function NavBar({ theme, site, links }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  });

  const StyledNavBar = styled.div`
    height: ${theme && theme.navbar.height};
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme && theme.navbar.backgroundColor};
    padding: ${theme && theme.navbar.padding};
    box-sizing: border-box;

    ${new MobileView(`
      padding: ${theme && theme.navbar.mobilePadding};
    `)}
  `;

  const linksToUse = (() => {
    let mylinks = [];
    links.forEach(value => {
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
    color: ${theme && theme.navbar.color};
    margin-bottom: 0;
    font: ${theme && theme.navbar.title.font};
  `;

  const LinksWrapper = styled.div`
    display: flex;
    ${new MobileView(`display: none;`)}
    height: ${theme && theme.navbar.height};
    line-height: ${theme && theme.navbar.height};
    align-items: center;
  `;

  return (
    <StyledNavBar>
      <MobileNav links={linksToUse} theme={theme} />
      <Title>{site &&  site.sitename}</Title>
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
export default function NavigationBar({ theme, links }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <NavBar links={links} height={theme && theme.height} />
  );
}
NavigationBar.defaultProps = {
  title: "My Website",
  links: []
};
