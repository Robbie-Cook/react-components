import React, { Component } from "react"
import PropTypes from "prop-types"
import { Button as GrommetButton, Grommet } from "grommet"
import { DefaultTheme } from "../themes"

import styled from "styled-components"
import { Dimensions } from "../utilities"

/**
 * A class for generic buttons.
 * Takes a title and a function.
 */
class Button extends Component {
  render() {
    /* Styling */
    const customTheme = {
      button: {
        border: {
          color: DefaultTheme.text.color,
        },
        color: (() => {
          if (this.props.active) {
            if (this.props.activeColor) {
              return this.props.activeColor
            }
            return DefaultTheme.link.colorActive
          } else if (this.props.color) {
            return this.props.color
          }
          return DefaultTheme.link.color
        })(),
      },
    }

    const activeStyle = this.props.activeStyle
      ? this.props.activeStyle
      : `background-color: ${DefaultTheme.link.colorActive}`

    const MyButton = styled(GrommetButton)`
      border: 3px solid ${DefaultTheme.link.color};
      border-radius: 6px;
      color: ${DefaultTheme.text.color};
      transition: 0.03s;

      /* for svg icons */
      fill: ${DefaultTheme.text.color};
      stroke: ${DefaultTheme.text.color};

      &:hover {
        & p {
          border-bottom: 1px solid transparent;
        }
        background-color: ${this.props.hoverColor
          ? this.props.hoverColor
          : DefaultTheme.link.color};
      }

      margin: ${this.props.margin ? this.props.margin : new Dimensions(10, 20)};
      color: ${DefaultTheme.text.color};
      line-height: 27px;
      font-size: 16px;
      padding: 5px 12px;
      font-weight: normal;

      // Styles for active links
      background-color: ${this.props.activeColor
        ? this.props.activeColor
        : DefaultTheme.link.color};

      ${this.props.style};
      ${this.props.active && activeStyle};
    `

    const BorderedText = styled.p`
      color: ${DefaultTheme.text.color};
      margin: 0;
      text-decoration: none;
      ${(() => {
        return this.props.underline
          ? `border-bottom: 1px solid ${DefaultTheme.text.color};`
          : ``
      })()}

      line-height: 20px;
    `

    const innerDom = (
      <MyButton
        icon={this.props.icon}
        label={<BorderedText>{this.props.label}</BorderedText>}
        onClick={this.props.function}
        href={this.props.to}
      />
    )

    return (
      <Grommet theme={customTheme}>
        {/* Make the button a link if this.props.to is specified */}
        {innerDom}
      </Grommet>
    )
  }
}
Button.propTypes = {
  style: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  function: PropTypes.func,
  icon: PropTypes.elementType,
  to: PropTypes.string, // Signifies the button is a link, this is the link address
  label: PropTypes.string, // Label for the button
  active: PropTypes.bool, // whether or not this button is active
  activeColor: PropTypes.string,
  activeStyle: PropTypes.string,
  hoverColor: PropTypes.string
}

/**
 * A group of Buttons, given an array of button titles, and an array of
 * corresponding functions.
 */
class ButtonGenerator extends Component {
  render() {
    return (
      /* 
      Returns buttons, each with a function passed to the button
      as a prop.
      */
      <ButtonWrapper buttonRow={this.props.buttonRow}>
        {/* Buttons defined as props */}
        {this.props.labels.map((item, index) => {
          return (
            <Button
              function={this.props.functions[index]}
              margin={this.props.buttonMargin}
              style={this.props.buttonStyle}
              label={item}
            />
          )
        })}
        {/* Buttons defined as children */}
      </ButtonWrapper>
    )
  }
}
ButtonGenerator.propTypes = {
  labels: PropTypes.array.isRequired,
  functions: PropTypes.array, // Should be an array of functions
  buttonRow: PropTypes.bool, // Whether to display the buttons as a row
  buttonStyle: PropTypes.string, // Styles passed to the button
  activeColor: PropTypes.string, // The color of an active button
}

/* 
A wrapper for buttons.
Used when buttons don't have to be dynamically generated -- can be 
passed as children
*/
class ButtonWrapper extends Component {
  render() {
    const ButtonContainer = styled.div`
      ${(() => {
        /*
        Set the flex direction of the container to "row" if 
        this.props.buttonRow is true.
      */
        return (
          /*
           * Sets flex direction to row by default, and column if buttonRow
           * is true
           */
          "flex-direction: " +
          (this.props.buttonRow !== false ? "row" : "column") +
          ";"
        )
      })()}
      display: flex;
      ${this.props.style};
    `
    return <ButtonContainer>{this.props.children}</ButtonContainer>
  }
}
ButtonWrapper.propTypes = {
  buttonRow: PropTypes.bool, // Whether or not the buttons should be displayed
  // as a row or column. Defaults to true.
}

export { Button, ButtonGenerator, ButtonWrapper }
