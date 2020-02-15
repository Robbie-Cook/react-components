/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import H3 from "../text/H3";
import Button from '../Button';

export interface IUserDetailsFormProps {
  photo?: string,
  username?: string,
  email?: string
  onLogout?(): void;
}

export default function UserDetailsForm (props: IUserDetailsFormProps) {
  return (
    <div>
      <H3>{props.username ? `Welcome, ${props.username}!` : `Welcome!`}</H3>
      <p>Email: <span>{props.email}</span></p>
      <Button onClick={props.onLogout}>Log out</Button>
    </div>
  );
}
