/** @jsx jsx */
import { jsx, css, SerializedStyles } from "@emotion/core";
import { useTheme } from "@robbie-cook/themer";

interface Props {
  children: string;
}

const H3: React.FC<Props> = (props) => {
  const theme = useTheme();
  return (
    <h3
      css={css`
        color: ${theme.colors.text};
        font-family: ${theme.font.fontFamily};
        font-weight: bold;
      `}
      {...props}
    >
      {props.children}
    </h3>
  );
};

export default H3;
