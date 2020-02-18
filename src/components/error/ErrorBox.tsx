/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import CancelIcon from "../../../assets/images/icons/cancel.svg";
import { useTheme } from "@robbie-cook/themer";

export interface IErrorBoxProps {
  /**
   * A message to display
   */
  children: any;
}

/**
 * An error box to show if something isn't working
 */
export default function ErrorBox(props: IErrorBoxProps) {
  const theme = useTheme('errorBox');
  return (
    <span>
      <img
        css={css`
          filter: invert(51%) sepia(12%) saturate(2905%) hue-rotate(313deg)
            brightness(100%) contrast(106%);
        `}
        src={CancelIcon}
      />
      {props.children}
    </span>
  );
}
