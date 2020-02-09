/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// import styled from '@emotion/styled'
import * as React from "react";
import { ThemeConsumer, ThemeContext, useTheme } from "@robbie-cook/themer";

interface IButtonProps {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: Record<string, any>;
}

/**
 * A normal button component
 */
const Button: React.FC<IButtonProps> = props => {
  const theme = useTheme();

  return (
    <button
      css={css`
        border: 1px solid ${theme.colors.primary};
        background-color: ${theme.colors.background}
        font-size: 0.78rem;
        padding: 10px 20px;
        color: ${theme.colors.primary};
        transition: all 0.2s;
        margin-top: 10px;

        &:hover {
          cursor: pointer;
          background-color: ${theme.colors.primary};
          color: ${theme.colors.background};
        }
        &:active {
          transform: scale(1.1);
        }
      `}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
