/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, Fragment } from "react";
import Input from "../input/Input";
import Button from "../Button";
import { useTheme } from "@robbie-cook/themer";
import H3 from "../text/H3";

interface ILoginFormProps {
  onSubmit: any;
}

/** The UI for a login form */
const LoginForm: React.FC<ILoginFormProps> = props => {
  const theme = useTheme();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        max-width: 300px;
        background-color: ${theme.colors.muted};
        padding: 20px;
      `}
    >
      <H3
        css={css`
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 40px;
        `}
      >
        Login
      </H3>
      <Input
        placeholder="Username"
        column
        onChange={(event: any) => setUsername(event.target.value)}
      />
      <Input
        placeholder="Password"
        column
        type="password"
        onChange={(event: any) => setPassword(event.target.value)}
      />
      <Button onClick={() => props.onSubmit(username, password)}>Log in</Button>
    </div>
  );
};

export default LoginForm;
