/// <reference types="react" />
export interface IUserDetailsFormProps {
    photo?: string;
    username?: string;
    email?: string;
    onLogout?(): void;
    onSettingsClicked?(): void;
}
export default function UserDetailsForm(props: IUserDetailsFormProps): JSX.Element;
