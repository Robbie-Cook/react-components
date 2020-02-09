import React from "react";

import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import LoginForm from "../../components/login/LoginForm";

export default {
  title: "Login Form"
};

const LoginFormStory: React.FC = () => (
  <LoginForm onSubmit={action("clicked")} />
);

export { LoginFormStory };
