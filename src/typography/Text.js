import React from 'react';
import styled from 'styled-components';
import ThemeContext from '../themes/ThemeContext';

/**
 * Text element for a page.
 * Should be used in place of <p>, because this
 * is a globally-styled version
 */
function Text({ theme, myStyled, children }) {
  const localTheme = theme || null;

  const StyledText = styled.p`
    margin: 12px 0;
    color: ${localTheme && localTheme.color};

    font-family: ${localTheme && localTheme.font}; 
    ${myStyled};
  `;
  return <StyledText>{children}</StyledText>;
}
Text.defaultProps = {
  style: '',
};

export default Text;
