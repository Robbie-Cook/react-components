import { Button } from "../ui-components/Button";
import styled from "styled-components";
import React from "react";
import ThemeContext from "../themes/ThemeContext";

/**
 * A 'Higher order component'-like button to represent a navigation link
 */
export default function NavButton({ theme, styled, active, children, to, label }) {

  const myStyled = `
    background-color: transparent;
    border-color: transparent;
    border-width: 0px;
    color: ${theme && theme.navbar.links.color};
    width: fit-content;
    display: flex;
    align-contents: center;

    & > * {
      transition-duration: .1s;
      font: ${theme && theme.navbar.links.font}!important;
      color: ${theme && theme.navbar.links.hoverColor};
      align-self: center;
      height: 20px;
      box-sizing: border-box;
    }

    &:hover {
      & > * {
        border-bottom: 2px solid ${theme && theme.navbar.links.hoverColor}!important;
        color: ${theme && theme.navbar.links.hoverColor};
      }
    }

    margin: ${theme && theme.navbar.links.margin};

    ${active &&
      `
    & p {
      color: ${theme && theme.navbar.links.activeColor};
    }
    `};

    ${styled};
  `;

  return (
    <Button styled={myStyled} label={label} to={to}>
      {children}
    </Button>
  );
}
NavButton.defaultProps = {
  label: "My label",
  to: "/",
  active: false,
};
