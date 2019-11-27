import React, { useState } from "react";
import { Menu } from "styled-icons/material/Menu";
import { Close } from "styled-icons/material/Close";
import styled from "styled-components";
import { motion } from "framer-motion";
import ThemeContext from "../../themes/ThemeContext";
import MobileMenuButton from "./MobileMenuButton";
import MenuContainer from "./MenuContainer"

export default function MobileMenu({ links, height, theme }) {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  return (
    <div onClick={() => { setMobileNavVisible(!mobileNavVisible); } } style={{height: height}}>
      <MobileMenuButton key="mobile-menu-button" open={mobileNavVisible} height={height}/>
      <MenuContainer key="menu-container" open={mobileNavVisible}>{links}</MenuContainer>
    </div>
  );
}
MobileMenuButton.defaultProps = {
  onClick: () => {
    console.log("Pressed!");
  },
  links: <></>,
  height: "60px",
};
