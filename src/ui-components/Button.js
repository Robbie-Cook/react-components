/* eslint-disable max-classes-per-file */
import { Button as GrommetButton } from 'grommet';
import PropTypes from 'prop-types';
import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../themes/ThemeContext';
import Text from '../typography/Text';

/**
 * A class for generic buttons.
 * Takes a title and a function.
 */
function Button(props) {
  // Can take a custom theme for a navbar button
  const theme = useContext(ThemeContext).button;

  const MyButton = styled(GrommetButton)`
    border: 3px solid ${theme.backgroundColor};
    border-radius: 6px;
    transition: 0.03s;
    height: 40px;
    transition: 0.2s;

    /* for svg icons */
    fill: ${theme.color};
    stroke: ${theme.color};
    border: 1px solid ${theme.color};

    &:hover {
      & p {
        border-bottom: 1px solid transparent;
        color: ${theme.hover.color};
      }
      background-color: ${theme.hover.backgroundColor};
      box-shadow: none;
    }

    & p {
      color: ${theme.color};
      line-height: 28px;
      margin: 0;
    }

    margin: ${props.margin};
    color: ${theme.color};
    line-height: 27px;
    font-size: 16px;
    padding: 5px 12px;
    font-weight: normal;

    // Styles for active links
    background-color: ${theme.backgroundColor};

    ${props.style};
  `;

  const BorderedText = (
    <Text
      style={`
    color: ${theme.color};
    margin: 0;
    text-decoration: none;
    line-height: 20px;
  `}
    >
      {props.label}
    </Text>
  );

  return (
    <MyButton
      icon={props.icon}
      label={BorderedText}
      onClick={props.function}
      href={props.to}
    />
  );
}
Button.defaultProps = {
  to: '/', // Signifies the button is a link, this is the link address
  label: 'My name', // Label for the button
  active: false, // whether or not this button is active
};

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
          );
        })}
        {/* Buttons defined as children */}
      </ButtonWrapper>
    );
  }
}
ButtonGenerator.propTypes = {
  labels: PropTypes.array.isRequired,
  functions: PropTypes.array, // Should be an array of functions
  buttonRow: PropTypes.bool, // Whether to display the buttons as a row
  buttonStyle: PropTypes.string, // Styles passed to the button
  activeColor: PropTypes.string, // The color of an active button
};

/**
 * A wrapper for buttons.
 * Used when buttons don't have to be dynamically generated -- can be
 * passed as children
 *
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
          'flex-direction: ' +
          (this.props.buttonRow !== false ? 'row' : 'column') +
          ';'
        );
      })()}
      display: flex;
      ${this.props.style};
    `;
    return <ButtonContainer>{this.props.children}</ButtonContainer>;
  }
}
ButtonWrapper.propTypes = {
  buttonRow: PropTypes.bool, // Whether or not the buttons should be displayed
  // as a row or column. Defaults to true.
};

export { Button, ButtonGenerator, ButtonWrapper };
