/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, Fragment } from "react";
import Input from "../input/Input";
import Button from "../Button";
import { useTheme } from "@robbie-cook/themer";
import H3 from "../text/H3";
import ContentBox from "../ContentBox";

interface ISignupFormProps {
  onSubmit: (email: string, password: string) => boolean;
}

/** The UI for a Signup form */
const SignupForm: React.FC<ISignupFormProps> = props => {
  const theme = useTheme();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

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
        Sign up
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
        onChange={(value) => setPassword(value)}
      />
      <Button
        css={css`
          margin-top: 15px;
        `}
        onClick={() => {
          props.onSubmit(username, password);
          setUsername(null);
          setPassword(null);
        }}
      >
        Sign up
      </Button>
    </ContentBox>
  );
};

export default SignupForm;
