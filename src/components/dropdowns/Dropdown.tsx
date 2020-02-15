/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useRef, useEffect, useCallback, createRef } from "react";
import { ContentBox } from "@robbie-cook/react-components";
import { useTheme } from "@robbie-cook/themer";
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
const Dropdown: React.FC<IDropdownProps> = (props) => {
  const offsetElement = useRef(null);
  const theme = useTheme();

  // If the user clicks anywhere but the dropdown, close
  // the dropdown
  document.addEventListener("click", (ev: MouseEvent) => {
    const dropdownElement = offsetElement.current as HTMLElement;
    const boundingRect = dropdownElement.getBoundingClientRect();
    console.log(boundingRect.x);
    console.log(ev.clientX, ev.clientY);
  })



  // How much to offset the dropdown to the left/right
  const [xOffset, setXOffset] = useState(0);

  const Wrapper = styled.div`
    position: absolute;
    margin-top: 7px;
  `;


  const wrapperStyle = {};

  return (
    <div className="side" css={css`
      transition: opacity .2s ease 0s;
      ${props.active ? 'opacity: 1' : 'opacity: 0; height: 0' }
    `}>
      <Wrapper style={{ right: xOffset }} ref={offsetElement}>
        <ContentBox>{props.children}</ContentBox>
      </Wrapper>
    </div>
  );
};

export default Dropdown;
