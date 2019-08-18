/**
 * A component which defines Row and Col for layout
 */

import styled from "styled-components";
import { DefaultTheme } from "../themes";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { MobileView } from "./Views";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  ${new MobileView(`
    flex-direction: column;
  `)}
`;

/**
 * A column on a page
 */
function Col(props) {
  const StyleCol = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px 20px 0;
    width: ${props.width};

    ${new MobileView(`
        width: 100%;
      `)}
  `;

  return <StyleCol>{props.children}</StyleCol>;
}
Col.propTypes = {
  width: PropTypes.string // Given as a string,
  // not as a number, e.g. 50%
};

export { Col, Row, LayoutWrapper };
