/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, Fragment } from "react";
import Input from "../input/Input";
import Button from "../Button";
import { useTheme } from "@robbie-cook/themer";
import H3 from "../text/H3";
import ContentBox from "../ContentBox";
import ErrorBox from "../error/ErrorBox";

interface ILoginFormProps {
  onSubmit: (email: string, password: string) => boolean | void;
}

/** The UI for a login form */
const LoginForm: React.FC<ILoginFormProps> = props => {
  const theme = useTheme();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  /**
   * Whether an error has occurred in the form
   */
  const [error, setError] = useState(null)

  return (
    <ContentBox {...props}>
      <H3
        css={css`
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 40px;
          min-width: 250px;
        `}
      >
        Login
      </H3>
      <Input
        placeholder="Email"
        column
        onChange={(value) => {
          setUsername(value)
        }}
      />
      <Input
        placeholder="Password"
        column
        type="password"
        onChange={(value) => {
          setPassword(value)
        }}
      />
      {error && <ErrorBox>{error}</ErrorBox>}
      <Button
        css={css`
          margin-top: 15px;
        `}
        loading={loading}
        onClick={() => {
          {error && setError(null)};
          if (!username || !password) {
            setError('Username or password empty!');
            return;
          }
          setLoading(true);
          props.onSubmit(username, password);

          // Set these to null *straight away* for security reasons
          setUsername(null);
          setPassword(null);
          setLoading(false);
        }}
      >
        Log in
      </Button>
    </ContentBox>
  );
};

export default LoginForm;
