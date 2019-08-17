<<<<<<< develop
import { setState, useContext } from "react";
import { Transition } from "../animation"
import { ThemeContext } from "../themes";
import styled from "styled-components"
import { Colors } from "../themes"
=======
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import styled from "styled-components";
// import { MyAnilink } from "../animation";
import { MobileView, ViewSizes } from "../layout/Views";
// import MobileNav from "../navigation/MobileNav";
import { Colors, Sizes } from "../themes";
import { Spacer } from "../ui-components";
import { Heading, Link, MyLink } from "../utilities";
>>>>>>> Cleaning up circular dependencies

/**
 * Navigation bar UI component (version 2, without material-ui)
 */
export default function NavigationBar() {
  // Set up a loading state to trigger when component has painted
  const [loaded, setLoaded] = setState(false)
  useEffect(() => {setLoaded(true)}, [])

  const context = useContext(ThemeContext)

<<<<<<< develop
  return(
    <Transition loaded={loaded}>
      <Bar />
    </Transition>
  )
}

/**
 * The command bar element
 * @param {*} props 
 */
function Bar(props) {
  const StyledBar = styled.div`
    background-color: ${props.backgroundColor};
    width: 100%;
    height: ${props.height};
  `
  return <StyledBar />
=======
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
      margin-left: 0;
      padding: 0;
      ${new MobileView(`
        margin-left: 20px;
      `)};
    `

    let navigationLinks = [new MyLink("Home", "/"), new MyLink("News", "/news")]
    let heading = "Open Politics"

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
          {/* <MobileNav pages={navigationLinks} /> */}
          <StyledTabs>
            {(() => {
              let array = []

              let LinkContainer = styled.div`
                margin-right: 30px;
              `
              navigationLinks.map(item => {
                // If the current URL is the same as the item path, mark Tab as active
                array.push(
                  <LinkContainer>
                    {/* <MyAnilink path={item.path}> */}
                      <Link
                        style={`
                          line-height: ${Sizes.navbar.height};
                          position: relative;
                          bottom: -5px;
                          color: ${Colors.text.color}
                        `}
                      >
                        {item.name}
                      </Link>
                    {/* </MyAnilink> */}
                  </LinkContainer>
                )
              })
              return array
            })()}
          </StyledTabs>
        </StyledToolbar>
      </StyledAppBar>
    )
  }
>>>>>>> Cleaning up circular dependencies
}
Bar.defaultProps = {
  backgroundColor: Colors.navbar.backgroundColor,
  height: Colors.navbar.height,
}