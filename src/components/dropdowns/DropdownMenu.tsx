/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Button from "../Button";
import styled from "styled-components";
import Dropdown from "./Dropdown";

interface IDropdownMenuProps {
  label: string;
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  children: any;
  className: any;
}

/**
 * Defines a dropdown menu, which is activated by pressing the button
 */
const DropdownMenu: React.FC<IDropdownMenuProps> = (
  props: IDropdownMenuProps
) => {
  const [active, setActive] = useState(false);

  return (
    <div css={css``} className={props.className}>
      <Button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void =>
          setActive(!active)
        }
      >
        {props.label}
      </Button>
      {/* <Button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => console.log('SET!')}>{label}</Button> */}
      <Dropdown active={active} children={props.children} />
    </div>
  );
};

export default DropdownMenu;
