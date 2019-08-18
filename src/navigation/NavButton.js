import { Button } from "../ui-components/Button";
import styled from "styled-components";
import React, { useContext } from "react";
import ThemeContext from "../themes/ThemeContext";

/**
 * A 'Higher order component'-like button to represent a navigation link
 */
export default function NavButton(props) {
  const theme = useContext(ThemeContext).navbar.button;

  // Styles to apply when the button is active
  const activeStyles = `
    & * {
      color: ${theme.activeColor}!important;
    }
  `;

  const style = `
    background-color: ${theme.backgroundColor};
    border-color: ${theme.borderColor};

    &:hover {
      background-color: ${theme.backgroundColor};
    }
    ${props.active && activeStyles}
  `;

  return (
    <Button style={style} label={props.label} to={props.link}>
      {props.children}
    </Button>
  );
}
NavButton.defaultProps = {
  label: "My label",
  link: "/",
  active: false
};
