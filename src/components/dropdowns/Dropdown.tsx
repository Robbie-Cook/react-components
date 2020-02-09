import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "@robbie-cook/react-components";
import styled from "@emotion/styled";

// const DropdownWidth

interface IDropdownProps {
  /**
   * Whether or not to display the dropdown
   */
  active: boolean;
  children: any;
}

/**
 * A class to get the appropriate
 * offset from the side for the element
 * This is to prevent the element going off the screen.
 *
 * Note: make sure that the element you pass is not position:absolute,
 * as this will have an incorrect width.
 *
 * @param {HTMLElement} element The HTML element to inspect
 */
const calculateXOffset = (element: HTMLElement): number => {
  const rect = element.getBoundingClientRect();
  console.log(rect);
  const overflow = window.innerWidth - rect.left;
  return overflow;
};

/**
 * Defines a UI dropdown
 */
const Dropdown: React.FC<IDropdownProps> = ({ active, children }) => {
  const theme = useTheme();

  const StyledDropdown = styled.div`
    display: flex;
    width: 200px;
    height: fit-content;
    background-color: ${theme.colors.muted};
    padding: 20px;
  `;

  // How much to offset the dropdown to the left/right
  const [xOffset, setXOffset] = useState(0);

  const Wrapper = styled.div`
    position: absolute;
  `;

  const offsetElement = useRef(null);

  // Pass the element to offset
  // const offsetElement = useCallback((node) => {
  //   if (node !== null && xOffset === 0) {
  //     const localOffset = calculateXOffset(node);
  //     setXOffset(localOffset);
  //   }
  // }, []);

  useEffect(() => {
    console.log(offsetElement);
  });

  const style = active ? {} : { display: "none" };
  const wrapperStyle = {};

  return (
    <div className="side" style={style}>
      <Wrapper style={{ right: xOffset }}>
        <StyledDropdown ref={offsetElement}>{children}</StyledDropdown>
      </Wrapper>
    </div>
  );
};

export default Dropdown;
