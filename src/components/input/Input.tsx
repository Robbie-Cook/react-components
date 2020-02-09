/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { useTheme } from "@robbie-cook/themer";
import styled from "@emotion/styled";

interface Props {
  placeholder?: string;
  key?: string;
  label?: string;
  onChange: any;
  /**
   * Whether to display this component as a column (as opposed to the label next to the input on a row)
   */
  column?: boolean;
  type?: string;
}

const Input: React.FC<Props> = ({
  label,
  placeholder,
  key,
  onChange,
  column,
  type
}) => {
  const theme = useTheme();

  return (
    <label
      css={css`
        display: flex;
        ${column ? `flex-direction: column` : `flex-direction: row`};
        font-family: ${theme.font.fontFamily};
        font-weight: normal;
        height: 31px;
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
        {label}
      </span>
      <input
        css={css`

          &:focus {
            border: none;
          }
          border: none;
          border-radius: 4px;
          height: 100%;
          box-sizing: border-box;
          padding: 6px;
          ${column ? `width: 100%` : `width: auto`};
        `}
        id={key}
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
