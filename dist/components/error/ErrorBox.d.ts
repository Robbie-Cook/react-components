/// <reference types="react" />
export interface IErrorBoxProps {
    /**
     * A message to display
     */
    children: any;
}
/**
 * An error box to show if something isn't working
 */
export default function ErrorBox(props: IErrorBoxProps): JSX.Element;
