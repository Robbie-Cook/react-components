import { ThemeContext } from "@robbie-cook/themer";
import * as React from "react";

class Button extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
        <button {...props} style={{ backgroundColor: theme.background }}>{JSON.stringify(theme)}</button>
    );
  }
}
Button.contextType = ThemeContext;

export default Button;
