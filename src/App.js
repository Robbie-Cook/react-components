import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Transition from './animation/Transition';
import Page from './layout/Page';
import ThemeContext from './themes/ThemeContext';
import ThemeManager from './themes/ThemeManager';
import Heading from './typography/Heading';
import Link from './typography/Link';
import Text from './typography/Text';
import { Button } from './ui-components/Button';
import Dimensions from './utilities/Dimensions';
import { DefaultSiteContext, SiteContext } from './utilities/SiteContext';

/**
 * The main entry point for the app
 */
function App() {
  // State updated when component painted
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  const MyThemeObject = ThemeManager.fillTheme({
    text: {
      color: 'pink',
    },
  });

  return (
    <SiteContext.Provider value={DefaultSiteContext}>
      <ThemeContext.Provider value={MyThemeObject}>
        <ThemeContext.Consumer>
          {(value) => (
            <Helmet>
              <style type='text/css'>
                {`
                  body {
                      background-color: ${value.page.backgroundColor};
                  }
                `}
              </style>
            </Helmet>
          )}
        </ThemeContext.Consumer>
        <Page>
          <Transition show={loaded} spinner>
            <Heading>My React storyboard</Heading>
            <Text>
              This is a test of the different components in{' '}
              <Link href='https://www.npmjs.com/package/@robbie-cook/react-components'>
                @robbie-cook/react-components
              </Link>
            </Text>
            <Button label='Testing button' />

            <Heading type='h2'>Testing loader</Heading>
            <Transition show={false} spinner>
              <Text>Hidden text</Text>
            </Transition>
          </Transition>
        </Page>
      </ThemeContext.Provider>
    </SiteContext.Provider>
  );
}

export default App;
