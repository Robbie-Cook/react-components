import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Component for providing space in a UI
 *
 * Values must be given like so
 * <Spacer width="40px" />
 */
export default function Spacer(props) {
  const MySpacer = styled.div`
    height: ${props.height};
    width: ${props.width};
  `;

  return <MySpacer />;
}
Spacer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};
