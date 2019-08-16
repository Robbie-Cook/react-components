import { setState, useContext } from "react";
import { Transition } from "../animation"
import { ThemeContext } from "../themes";
import styled from "styled-components"
import { Colors } from "../themes"

/**
 * Navigation bar UI component (version 2, without material-ui)
 */
export default function NavigationBar() {
  // Set up a loading state to trigger when component has painted
  const [loaded, setLoaded] = setState(false)
  useEffect(() => {setLoaded(true)}, [])

  const context = useContext(ThemeContext)

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
}
Bar.defaultProps = {
  backgroundColor: Colors.navbar.backgroundColor,
  height: Colors.navbar.height,
}