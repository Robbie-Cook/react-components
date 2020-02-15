/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useRef, useLayoutEffect, useCallback, createRef } from "react";
import ContentBox from "../ContentBox";
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
const Dropdown: React.FC<IDropdownProps> = props => {
  const offsetElement = useRef(null);
  const theme = useTheme();

  // // If the user clicks anywhere but the dropdown, close
  // // the dropdown
  // document.addEventListener("click", (ev: MouseEvent) => {
  //   const dropdownElement = offsetElement.current as HTMLElement;
  //   const boundingRect = dropdownElement.getBoundingClientRect();
  //   console.log(boundingRect.x);
  //   console.log(ev.clientX, ev.clientY);
  // })

  // How much to offset the dropdown to the left/right
  const [wrapRight, setWrapRight] = useState(null);

  useLayoutEffect(() => {
    if (offsetElement.current) {
      const boundingBox = (offsetElement?.current as HTMLElement)?.getBoundingClientRect();
  
      console.log('Box', boundingBox?.x + boundingBox?.width);
      console.log('Window', window.innerWidth);
  
      if (boundingBox?.x + boundingBox?.width < window.innerWidth) {
        console.log('Dropdown longer than screen. Wrapping it.');
        setWrapRight(true);
      }
    }
  }, [offsetElement])



  return (
    <div
      className="side"
      css={css`
        position: absolute;
        margin-top: 7px;
        transition: opacity 0.2s ease 0s;
        ${wrapRight ? 'right: 0' : ''};
        ${props.active
          ? "opacity: 1"
          : "opacity: 0; height: 0; width: 0; overflow: hidden"}
      `}
      ref={offsetElement}
    >
      <ContentBox>{props.children}</ContentBox>
    </div>
  );
};

export default Dropdown;
