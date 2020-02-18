import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@robbie-cook/themer";

import "../assets/fonts.css";

const ThemeDecorator = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

addDecorator(withKnobs);
addDecorator(storyFn => <ThemeDecorator>{storyFn()}</ThemeDecorator>);