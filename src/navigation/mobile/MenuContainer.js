import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../themes";

/**
 * The list of items to appear after the button to open has been pressed.
 * @param {} props
 */
export default function MenuContainer({ open, children, theme}) {

  const StyledLinkContainer = styled.div`
    background-color: ${theme && theme.navbar.backgroundColor};
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: absolute;
    left: 0;
    padding: 6px 11px 10px 10px;
  `;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          // enter={{opacity: 1}}
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // style={{ display: "flex", justifyContent: "center" }}
        >
          <StyledLinkContainer>{children}</StyledLinkContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
MenuContainer.defaultProps = {
  visible: true
};
