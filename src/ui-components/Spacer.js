import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

/**
 * Component for providing space in a UI
 *
 * Values must be given like so
 * <Spacer width="40px" />
 */
class Spacer extends Component {
  render() {
    const Spacer = styled.div`
      height: ${this.props.height};
      width: ${this.props.width};
    `

    return <Spacer />
  }
}
Spacer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}


export default Spacer
