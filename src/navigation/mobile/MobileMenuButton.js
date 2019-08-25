import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { Close } from "styled-icons/material/Close";
import { Menu } from "styled-icons/material/Menu";
import ThemeContext from "../../themes/ThemeContext";

export default function MobileMenuButton(props) {
  const theme = useContext(ThemeContext);

  const variants = {
    hide: {
      opacity: 0,
      transition: {
        type: "spring",
      },
    },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
  };

  // Styles to share between both open and close button
  const commonButtonStyles = `
    width: 30px;
    left: 0;
    transition: 0.2s;
    margin: 0;
  `

  const StyledMenu = styled(Menu)`
    ${commonButtonStyles};
    & * {
      color: ${theme.navbar.links.color};
    }
  `;

  const StyledClose = styled(Close)`
    ${commonButtonStyles};
    & * {
      color: red;
    }
    &:hover {
      transform: rotate(90deg);
    }
  `;

  const StyledIconWrapper = styled.div`
    position: relative;
    transition: 0.2s;
    opacity: 0.8;
    margin: 0;
    width: ${props.width};
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  `;

  const motionWrapperStyles = {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "0px",
  };

  return (
    <StyledIconWrapper>
      <motion.div
        variants={variants}
        initial="show"
        animate={props.navOpen ? "hide" : "show"}
        style={motionWrapperStyles}
      >
        <StyledMenu />
      </motion.div>

      <motion.div
        variants={variants}
        initial="hide"
        animate={props.navOpen ? "show" : "hide"}
        style={motionWrapperStyles}
      >
        <StyledClose />
      </motion.div>
    </StyledIconWrapper>
  );
}
MobileMenuButton.defaultProps = {
  width: "60px",
  onClick: () => { console.log("Clicked!"); },
}