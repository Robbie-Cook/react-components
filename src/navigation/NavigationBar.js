import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import { Transition } from "../animation";
import styled from "styled-components";
// import { MyAnilink } from "../animation";
import { MobileView, ViewSizes } from "../layout/Views";
// import MobileNav from "../navigation/MobileNav";
import { DefaultTheme, Sizes } from "../themes";
import { Spacer } from "../ui-components";
import { Heading, Link, MyLink } from "../utilities";

/**
 * Navigation bar UI component (version 2, without material-ui)
 */
export default function NavigationBar() {
  // Set up a loading state to trigger when component has painted
  const [loaded, setLoaded] = setState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const context = useContext(ThemeContext);

  // TODO: turn this into a prop / theme
  let navigationLinks = [new MyLink("Home", "/"), new MyLink("News", "/news")];
  let heading = "Open Politics";

  return (
    <Bar navigationLinks={navigationLinks}>
    </Bar>
  );
}

/**
 * Represents a navigation bar
 * @param {*} props 
 */
function Bar(props) {

}
Bar.defaultProps = {
  navigationLinks: [new MyLink("Home", "/"), new MyLink("News", "/news")],
  height: "60px",
  backgroundColor: DefaultTheme.navbar.backgroundColor
}
