import React from "react";

import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ErrorBox from "../../components/error/ErrorBox";

export default {
  title: "Error Box"
};

const ErrorBoxStory: React.FC = () => (
  <ErrorBox>
    {text("Error", "You have dabbed too many times. Please dab again later")}
  </ErrorBox>
);

export { ErrorBoxStory };
