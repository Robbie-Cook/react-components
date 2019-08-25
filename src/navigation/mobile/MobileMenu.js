import React, { useState, useContext } from "react";
import { Menu } from "styled-icons/material/Menu";
import { Close } from "styled-icons/material/Close";
import styled from "styled-components";
import { motion } from "framer-motion";
import ThemeContext from "../../themes/ThemeContext";
import MobileMenuButton from "./MobileMenuButton";

export default function MobileMenu(props) {
  const theme = useContext(ThemeContext).navbar;

  const StyledNavButton = styled.div`
    display: flex;
    width: ${props.buttonWidth};
    & * {
      height: ${theme.height};
      color: ${theme.color};
      margin: 0 20px 0 0;
      font-size: 25px;
      transition: 0.2s;
    }
  `;
  return (
    <>
      <StyledNavButton>
        <MobileMenuButton navOpen={props.navOpen} width={props.buttonWidth}/>
      </StyledNavButton>
      <MenuContainer visible={props.navOpen}>{props.links}</MenuContainer>
    </>
  );
}
MobileMenuButton.defaultProps = {
  onClick: () => {
    console.log("Pressed!");
  },
  navOpen: false,
  links: <></>
};
