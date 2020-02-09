import React from "react";

import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Input from "../components/input/Input";

export default {
  title: "Input"
};

const InputStory: React.FC = () => (
  <Input onChange={action("clicked")} label={text("Children", "My Button")} column={boolean('Column', true)}/>
);

export { InputStory };
