/**
 * Styling for entire website. 
*/
import React from "react"
import styled from "styled-components"

const Title = styled.p`
  font-weight: bold;
  font-family: 'Roboto Slab', sans-serif;
  margin-right: 25px;
  text-transform: lowercase;
`

class DefaultTheme {
  static textColor = "#dcd6ce";
  static backgroundColor = "#0f0f0f";

  // Link color
  static link = {
    color: "#6385a9",
    colorActive: "#1565c0",
    colorHighlight: "#6385a9"
  };

  static text = {
    color: this.textColor,
    font: "'Roboto', sans-serif",
  };

  static page = {
    backgroundColor: "#0f0f0f",
    secondaryColor: "#EB6D6D", // reddish
    padding: "20px 90px",
    mobilePadding: "20px 30px"
  };

  static navbar = {
    backgroundColor: this.backgroundColor,
    height: "60px",
    title: <Title>My dank website</Title>,
    color: this.text.color,
    padding: "0px 90px 0px 90px",
    mobilePadding: "0 30px",
    // Navbar button styles
    links: {
      backgroundColor: this.backgroundColor,
      color: this.textColor,
      borderColor: 'transparent',
      activeColor: this.link.color,
      hoverColor: this.link.color
    },
  };

  static button = {
    backgroundColor: this.link.color,
    color: this.text.color,
    borderColor: this.link.color,
    hover: {
      backgroundColor: this.backgroundColor,
      color: this.link.color
    }
  }
}

export default DefaultTheme;
