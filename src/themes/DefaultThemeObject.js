import Sizes from './Sizes';

const linkStyles = {
  color: '#6385a9',
  colorActive: '#1565c0',
  colorHighlight: '#6385a9',
};

const textStyles = {
  color: '#dcd6ce',
  font: "'Roboto', sans-serif",
};

const pageStyles = {
  backgroundColor: '#0f0f0f',
  secondaryColor: '#EB6D6D', // reddish
  padding: '20px 90px',
  mobilePadding: '20px 30px',
};

const navbarStyles = {
  backgroundColor: pageStyles.backgroundColor,
  height: '60px',
  title: {
    name: 'My dank website', // Should come from SiteContext
    font: "bold 20px 'Roboto Slab',serif",
  },
  color: textStyles.color,
  padding: '0px 90px 0px 90px',
  mobilePadding: '0 30px',
  // Navbar button styles
  links: {
    color: textStyles.color,
    borderColor: 'transparent',
    activeColor: linkStyles.color,
    hoverColor: linkStyles.color,
    font: "bold 15px 'Roboto Slab',serif",
  },
};

const buttonStyles = {
  backgroundColor: linkStyles.color,
  color: textStyles.color,
  borderColor: linkStyles.color,
  hover: {
    backgroundColor: pageStyles.backgroundColor,
    color: linkStyles.color,
  },
};

/**
 * The theme object to be passed through the whole site
 */
const DefaultThemeObject = {
  textColor: textStyles.textColor,
  backgroundColor: pageStyles.backgroundColor,
  link: linkStyles,
  text: textStyles,
  page: pageStyles,
  navbar: navbarStyles,
  button: buttonStyles,
  breakpoints: Sizes,
};

export default DefaultThemeObject;
