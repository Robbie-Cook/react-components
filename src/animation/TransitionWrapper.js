import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { PureComponent } from "react";
import posed from "react-pose";
import styled from "styled-components";
import { ThemeContext } from "../themes";
import PropTypes from "prop-types";

/**
 * A loading screen
 */
class TransitionWrapper extends PureComponent {
  constructor(props) {
    super(props);
  }

  PosedDiv = posed.div({
    visible: {
      opacity: 1,
      height: "auto"
    },
    hidden: {
      opacity: 0,
      height: "0px",
      transition: {
        default: { ease: "linear", duration: 100 }
      }
    }
  });

  StyledDiv = styled(this.PosedDiv)``;

  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {value => {
            console.log("Context: " + value.text.color);
          }}
        </ThemeContext.Consumer>

        <this.StyledDiv pose={this.props.loaded ? "hidden" : "visible"}>
          <Spinner color={this.context.text.color} />
        </this.StyledDiv>
        <this.StyledDiv pose={this.props.loaded ? "visible" : "hidden"}>
          {this.props.children}
        </this.StyledDiv>
      </>
    );
  }
}
TransitionWrapper.contextType = ThemeContext;
TransitionWrapper.defaultProps = {
  loaded: true // Whether the component is loaded
};

// A spinner graphic
function Spinner(props) {
  StyledSpinnerWrapper = styled.div`
  min-width: 100px;
  color: ${props.color}
  animation-name: spin;
  animation-duration: 2500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  `;

  return (
    <StyledSpinnerWrapper>
      <FontAwesomeIcon
        style={{ fontSize: "65px", display: "flex", margin: "auto" }}
        icon={faCircleNotch}
      />
    </StyledSpinnerWrapper>
  );
}
Spinner.contextType = ThemeContext;
Spinner.defaultProps = {
  color: "white"
};

export default TransitionWrapper;
