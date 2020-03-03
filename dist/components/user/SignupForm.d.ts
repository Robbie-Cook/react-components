/// <reference types="react" />
interface ISignupFormProps {
    onSubmit: (email: string, password: string) => boolean;
}
/** The UI for a Signup form */
declare const SignupForm: React.FC<ISignupFormProps>;
export default SignupForm;
