import * as React from "react";
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
declare const Button: React.FC<IButtonProps>;
export default Button;
