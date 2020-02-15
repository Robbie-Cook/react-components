import React from "react";

import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "../components/Button";

export default {
  title: "Button"
};

const ButtonStory: React.FC = () => (
  <Button onClick={action("clicked")} loading={boolean("Loading", false)}>{text("Children", "My Button")}</Button>
);
const ButtonLoadingStory: React.FC = () => (
  <Button onClick={action("clicked")} loading={boolean("Loading", true)}>{text("Children", "My Button")}</Button>
);

export { ButtonStory, ButtonLoadingStory };
