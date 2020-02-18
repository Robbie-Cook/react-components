/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// import styled from '@emotion/styled'
import * as React from "react";
import { ThemeConsumer, ThemeContext, useTheme } from "@robbie-cook/themer";
import LoadingIcon from "../components/icons/LoadingIcon";

interface IButtonProps {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void;
  style?: Record<string, any>;

  /**
   * Trigger loading state for button
   */
  loading?: boolean;
}

/**
 * A normal button component
 */
const Button: React.FC<IButtonProps> = props => {
  const theme = useTheme().getComponent("button");

  const [iconColor, setIconColor] = React.useState(theme.colors.primary);

  return (
    <button
      onMouseEnter={() => setIconColor(theme.colors.background)}
      onMouseLeave={() => setIconColor(theme.colors.primary)}
      css={css`
        border: 1px solid ${theme.colors.primary};
        background-color: ${theme.colors.background};
        font-size: 0.78rem;
        padding: 10px 20px;
        color: ${theme.colors.primary};
        transition: all 0.2s;

        &:hover {
          cursor: pointer;
          background-color: ${theme.colors.primary};
          color: ${theme.colors.background};
        }
        &:active {
          transform: scale(1.1);
        }
      `}
      {...props}
      onClick={props.onClick}
      style={props.style}
    >
      {props.loading ? (
        <LoadingIcon color={iconColor} />
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
