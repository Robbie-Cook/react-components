import { Button } from "../ui-components/Button";
import styled from "styled-components";
import React, { useContext } from "react";
import ThemeContext from "../themes/ThemeContext";

/**
 * A 'Higher order component'-like button to represent a navigation link
 */
export default function NavButton(props) {
  const theme = useContext(ThemeContext);

  const style = `
    background-color: transparent;
    border-color: transparent;
    border-width: 0px;
    color: ${theme.navbar.links.color};
    width: fit-content;
    display: flex;
    align-contents: center;

    & > * {
      transition-duration: .1s;
      font: ${theme.navbar.links.font}!important;
      color: ${theme.navbar.links.hoverColor};
      align-self: center;
    }

    &:hover {
      & > * {
        color: ${theme.navbar.links.hoverColor};
        border-bottom: 0px!important;
      }
    }

    margin: ${theme.navbar.links.margin};

    ${props.active &&
      `
    & p {
      color: ${theme.navbar.links.activeColor};
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
