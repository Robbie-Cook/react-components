/// <reference types="react" />
interface ILoginFormProps {
    onSubmit: (email: string, password: string) => boolean | void;
}
/** The UI for a login form */
declare const LoginForm: React.FC<ILoginFormProps>;
export default LoginForm;
