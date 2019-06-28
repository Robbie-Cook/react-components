import AppBar from "@material-ui/core/AppBar"
import { withStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Toolbar from "@material-ui/core/Toolbar"
import React from "react"
import styled from "styled-components"
import Colors from "../data/Colors"
import Sizes from "../data/Sizes"
import MobileNav from "./MobileNav"
import MyAnilink from "./MyAnilink"
import { MobileView, Sizes as ViewSizes } from "./Views"
import MyLink from "./MyLink"
import { Link, Heading } from "./Typography"
import Spacer from "./Spacer"

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    /* CSS */
    const StyledAppBar = withStyles({
      root: {
        backgroundColor: Colors.backgroundColor,
        height: Sizes.navbar.height,
      },
    })(AppBar)

    const StyledTabs = withStyles({
      root: {
        // Not ideal, should be done with breakpoints in theme
        // re: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
        [`@media (max-width:${ViewSizes.mobileSize}px)`]: {
          display: "none",
        },
      },
    })(Tabs)

    const StyledToolbar = styled(Toolbar)`
      z-index: 150;
      margin-left: ${Sizes.page.sideMargin};
      padding: 0;
      ${new MobileView(`
        margin-left: 20px;
      `)};
    `

    let navigationLinks = [new MyLink("Home", "/"), new MyLink("News", "/news")]

    return (
      <StyledAppBar position="static" color="primary" colorPrimary>
        <StyledToolbar>
          {heading && (
            <>
              <Heading type="h3" margin="0">
                {heading}
              </Heading>
              <Spacer width="56px"></Spacer>
            </>
          )}
          <MobileNav pages={navigationLinks} />
          <StyledTabs>
            {(() => {
              const StyledTab = styled.p`
                font-weight: bold;

                color: ${Colors.textColor};

                &.active {
                  color: ${Colors.link.color};
                }

                &:hover {
                  color: ${Colors.link.color};
                }

                height: ${Sizes.navbar.height};
                text-decoration: none;
                margin-right: 97px;
                transition: 0.1s;
              `

              let array = []

              navigationLinks.map(item => {
                // If the current URL is the same as the item path, mark Tab as active
                array.push(
                  <MyAnilink path={item.path}>
                    <StyledTab>{item.name}</StyledTab>
                  </MyAnilink>
                )
              })
              return array
            })()}
          </StyledTabs>
        </StyledToolbar>
      </StyledAppBar>
    )
  }
}
export default NavigationBar
