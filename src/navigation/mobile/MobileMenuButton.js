import { motion, AnimatePresence } from "framer-motion";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Close } from "styled-icons/material/Close";
import { Menu } from "styled-icons/material/Menu";
import ThemeContext from "../../themes/ThemeContext";

export default function MobileMenuButton({ open, width, height }) {
  const theme = useContext(ThemeContext);

  // Styles to share between both open and close button
  const commonButtonStyles = `
    width: 30px;
    left: 0;
    transition: 0.2s;
    margin: 0;
    &:hover {
      transform: scale(1.2);
    }
  `;

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
    width: ${width};
    cursor: pointer;
    display: flex;
    width: ${width};
    height: ${height};
    color: ${theme.color};
    font-size: 25px;
    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  `;

  const motionWrapperStyles = {
    position: "absolute",
    width: width,
    height: height,
    display: "flex",
    justifyContent: "center",
    margin: "0px",
  };

  return (
    <AnimatePresence>
      <StyledIconWrapper>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={motionWrapperStyles}
          >
            <StyledClose />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={motionWrapperStyles}
          >
            <StyledMenu />
          </motion.div>
        )}
      </StyledIconWrapper>
    </AnimatePresence>
  );
}
MobileMenuButton.defaultProps = {
  width: "60px",
  open: false,
  height: "60px",
};
