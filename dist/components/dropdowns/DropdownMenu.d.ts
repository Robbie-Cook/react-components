import React from "react";
interface IDropdownMenuProps {
    label: string;
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    children: any;
    className: any;
}
/**
 * Defines a dropdown menu, which is activated by pressing the button
 */
declare const DropdownMenu: React.FC<IDropdownMenuProps>;
export default DropdownMenu;
