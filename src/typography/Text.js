import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../themes/ThemeContext';

/**
 * Text element for a page.
 * Should be used in place of <p>, because this
 * is a globally-styled version
 */
function Text(props) {
  const globalTheme = useContext(ThemeContext);
  const localTheme = globalTheme.text;

  const StyledText = styled.p`
    margin: 12px 0;
    color: ${localTheme.color};

    font-family: ${localTheme.font}; 
    ${props.styled};
  `;
  return <StyledText>{props.children}</StyledText>;
}
Text.defaultProps = {
  style: '',
};

export default Text;