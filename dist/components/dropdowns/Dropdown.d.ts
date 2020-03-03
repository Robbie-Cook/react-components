/// <reference types="react" />
interface IDropdownProps {
    /**
     * Whether or not to display the dropdown
     */
    active: boolean;
    children: any;
}
/**
 * Defines a UI dropdown
 */
declare const Dropdown: React.FC<IDropdownProps>;
export default Dropdown;
