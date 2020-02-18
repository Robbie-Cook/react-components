import React from "react";

import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import LoginForm from "../../components/user/LoginForm";
import UserDetailsForm from "../../components/user/UserDetailsForm";

export default {
  title: "User Forms"
};

const LoginFormStory: React.FC = () => (
  <LoginForm onSubmit={action("clicked")} />
);

const UserDetailsFormStory: React.FC = () => (
  <UserDetailsForm email={text('Email', 'example.com')}/>
);

export { UserDetailsFormStory, LoginFormStory };
