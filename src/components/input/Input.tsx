/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { useTheme } from "@robbie-cook/themer";
import styled from "@emotion/styled";

interface Props {
  placeholder?: string;
  key?: string;
  label?: string;
  /**
   * Whether to display this component as a column (as opposed to the label next to the input on a row)
   */
  column?: boolean;
  type?: string;
  onChange?: (string) => void;
}

const Input: React.FC<Props> = props => {
  const theme = useTheme().getComponent("input");

  return (
    <label
      css={css`
        display: flex;
        ${props.column ? `flex-direction: column` : `flex-direction: row`};
        font-family: ${theme.font.fontFamily};
        font-weight: normal;
        font-size: 0.7em;
        height: 40px;
        margin-bottom: 16px;
        
        justify-content: center;
        align-items: center;
      `}
    >
      <span
        css={css`
          margin-right: 20px;
          min-width: 80px;
        `}
      >
        {props.label}
      </span>
      <input
        css={css`
          font-size: inherit;
          border: 2px solid ${theme.colors.primary};
          border-radius: 4px;
          height: 100%;
          box-sizing: border-box;
          padding: 6px;
          color: ${theme.colors.textColor};
          ${props.column ? `width: 100%` : `width: auto`};
          &:focus {
            border: 2px solid ${theme.colors.textColor};
          }
        `}
        id={props.key}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        onChange={e => {
          props.onChange(e.target.value);
        }}
      />
    </label>
  );
};

export default Input;
