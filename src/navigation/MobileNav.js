import React, { useContext } from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DefaultTheme, ThemeContext } from "../themes";
import { MobileView } from "../layout/Views";

/**
 * A class representing a mobile nav.
 *
 * This class is used by NavigationBar, and should be refactored and added to this class
 * in the future.
 */
class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.anchorEl = React.createRef();
    this.state = { open: false };

    // Bind 'this' to functions so functions can use 'this' keyword
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // Generates the mobile menu
  generateMobileNav() {
    let jsx = [];

    this.props.links.map(item =>
      jsx.push(
        <NavButton
          to={value.path}
          label={value.name}
          active={value.isActive()}
        />
      )
    );
    return array;
  }

  // Toggle 'open' state of navmenu
  handleToggle() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  handleClose(event) {
    if (this.anchorEl.current.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  }

  render() {
    /* CSS */

    return (
      <MobileNavButton>
        <FontAwesomeIcon icon={faBars} />
      </MobileNavButton>
    );
  }
}
MobileNav.defaultProps = {
  theme: DefaultTheme.navbar
};

function MobileNavButton(props) {
  const theme = useContext(ThemeContext).navbar;

  const StyledNavButton = styled.div`
    display: none;
    & * {
      color: ${theme.color};
      margin: 0 30px 0 0;
      font-size: 20px;
      transition: 0.2s;
    }
    &:hover {
      cursor: pointer;
      & * {
        color: ${theme.button.hoverColor};
      }
    }
    ${new MobileView(`display: block`)}
  `;
  return <StyledNavButton />;
}

export default MobileNav;
