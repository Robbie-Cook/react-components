import React from "react";
import styled from "styled-components";
import DefaultThemeObject from "../themes/DefaultThemeObject";

/**
 * Represents a page link (i.e. a styled <a href="" />)
 * @param {*} props
 */
function Link(props) {
  const StyledLink = styled.a`
    font-family: "Roboto", sans-serif;
    color: ${DefaultThemeObject.link.color};
    ${props.styled};
  `;
  return <StyledLink href={props.href}>{props.children}</StyledLink>;
}
export default Link;