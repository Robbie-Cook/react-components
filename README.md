# React Components

![CircleCI](https://img.shields.io/circleci/build/github/Robbie-Cook/react-components/master)

A collection of reusable UI components for React: https://www.npmjs.com/package/@robbie-cook/react-components

These components are used throughout some personal projects. 

Pull requests / contributions welcome. Please send me an email to robbie@robbie.pw. 

## Usage

### Setup

### Prerequisites / Peer dependencies

* Node (https://nodejs.org/en/)
* Yarn (https://yarnpkg.com)
* React (https://reactjs.org/)
* styled-components (https://github.com/styled-components/styled-components)
* react-responsive-carousel (https://www.npmjs.com/package/react-responsive-carousel)

### Installation

Firstly, install the package (you will need to install yarn first -- (`npm install -g yarn`)): 
`yarn add @robbie-cook/react-components --save`

Then, you will need to wrap your root components in a ThemeContext.Provider and SiteContext.Provider provided by the package. For example,

```
import { ThemeContext, SiteContext } from "@robbie-cook/react-components"
...
<Container>
  <SiteContext.Provider>
    <ThemeContext.Provider>
      <App />
    </ThemeContext.Provider>
  </SiteContext.Provider>
</Container>
...
```

This will populate the default values for the theme.
To make your own theme for the app, you can add a value when you add the provider. Make sure you use ThemeManager to merge your theme with the default.

e.g. 
```
import { ThemeManager } from "@robbie-cook/react-components"

const MyTheme = ThemeManager.fillTheme({
  textColor: textColor,

  backgroundColor: backgroundColor,

  link: link,

  text: text,

  page: page,

  navbar: navbar,

  button: button,
})
```

Then, in your component: 

```
<SiteContext.Provider value={MySiteContext}>
  <ThemeContext.Provider value={MyTheme}>
    <App />
  </ThemeContext.Provider>
</SiteContext.Provider>
```

After that, you can import any components you need. For example, you can run `import { Button } from @robbie-cook/react-components`

## Notes 

This project is in its very early stages. I am using it to share code between my React applications. 
The Providers need to be moved to redux in a new release, because they implement very poorly a Redux application.

### Roadmap

* Implement Redux with a new major release
* Improvements to transition element & navbar 
* Gradual ThemeProvider implementation as needed across components (major version change will be needed)
* Very gradual move to Typescript
