/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// import styled from '@emotion/styled'
import * as React from "react";
import { ThemeConsumer, ThemeContext, useTheme } from "@robbie-cook/themer";

interface Props {
  children?: any;
}

// const StyledButton = styled.div`

// `

const Button: React.SFC<Props> = (props) => {
  const theme = useTheme();

  console.log(theme);

  return (
    // <ThemeConsumer>
      <button
        css={css`
          background-color: red;
        `}
      >
        {props.children}
      </button>
    // </ThemeConsumer>
  );
};

export default Button;
