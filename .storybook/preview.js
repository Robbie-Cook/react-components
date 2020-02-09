import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react";
import { ThemeConsumer } from "@robbie-cook/themer";

import "../assets/fonts.css"

addDecorator(withKnobs);