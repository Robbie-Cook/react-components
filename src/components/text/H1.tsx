/** @jsx jsx */
import { jsx, css, SerializedStyles } from "@emotion/core";
import { useTheme } from "@robbie-cook/themer";

interface Props {
  children: string;
}

const H1: React.FC<Props> = (props) => {
  const theme = useTheme().getComponent('h1');
  return (
    <h1
      css={css`
        color: ${theme.colors.text};
        font-family: ${theme.font.fontFamily};
        font-weight: bold;
      `}
      {...props}
    >
      {props.children}
    </h1>
  );
};

export default H1;
