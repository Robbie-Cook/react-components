/*
Styling for entire website. All common variables are being migrated here from
css/global-styles.css. 

This is to be replaced with React.Context, where this is an object passed 
through a color context
*/
class DefaultTheme {
  static textColor = "#dcd6ce"
  static backgroundColor = "#0f0f0f"
  
  // Link color
  static link = {
      color: '#6385a9',
      colorActive: '#1565c0',
      colorHighlight: '#6385a9'
  }

  static text = {
      color: this.textColor
  }

  static page = {
    backgroundColor: '#0f0f0f',
    secondaryColor: '#EB6D6D', // reddish
  }

  static navbar = {
    backgroundColor: this.backgroundColor
  }
}

export default DefaultTheme
