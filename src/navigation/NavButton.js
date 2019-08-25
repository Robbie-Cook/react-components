import { Button } from "../ui-components/Button";
import styled from "styled-components";
import React, { useContext } from "react";
import ThemeContext from "../themes/ThemeContext";

/**
 * A 'Higher order component'-like button to represent a navigation link
 */
export default function NavButton(props) {
  const theme = useContext(ThemeContext).navbar.links;

  const style = `
    background-color: ${theme.backgroundColor};
    border-color: ${theme.borderColor};
    border-width: 1px;
    color: ${theme.color};
    width: fit-content;

    &:hover {
      background-color: ${theme.backgroundColor};
      border-color: ${theme.activeColor};
      box-shadow: 0px 0px 0px 2px ${theme.activeColor};

      & * {
        color: ${theme.hoverColor};
      }
    }

    margin: ${theme.margin};

    ${props.active &&
      `
    & p {
      color: ${theme.activeColor};
    }
    `};

    ${props.style};
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
  active: false,
};
