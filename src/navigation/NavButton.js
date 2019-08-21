import { Button } from "../ui-components/Button";
import styled from "styled-components";
import React, { useContext } from "react";
import ThemeContext from "../themes/ThemeContext";

/**
 * A 'Higher order component'-like button to represent a navigation link
 */
export default function NavButton(props) {
  const theme = useContext(ThemeContext).navbar.button;

  const style = `
    background-color: ${theme.backgroundColor};
    border-color: ${theme.borderColor};

    &:hover {
      background-color: ${theme.backgroundColor};
    }
    ${props.active &&
      `
    & p {
      color: ${theme.activeColor};
    }
    `}
  `;

  return (
    <Button style={style} label={props.label} to={props.to}>
      {props.children}
    </Button>
  );
}
NavButton.defaultProps = {
  label: "My label",
  to: "/",
  active: false
};
