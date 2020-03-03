/// <reference types="react" />
interface Props {
    placeholder?: string;
    key?: string;
    label?: string;
    /**
     * Whether to display this component as a column (as opposed to the label next to the input on a row)
     */
    column?: boolean;
    type?: string;
    onChange?: (string: any) => void;
}
declare const Input: React.FC<Props>;
export default Input;
