/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTheme } from "@robbie-cook/themer"

export interface IContentBoxProps {
  children: any
}

export default function ContentBox (props: IContentBoxProps) {

  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        max-width: 300px;
        background-color: ${theme.colors.muted};
        padding: 40px;
        border-radius: 5px;

        & h3 {
          margin-top: 0px;
        }
      `}
      {...props}
    >{props.children}</div>
  );
}
