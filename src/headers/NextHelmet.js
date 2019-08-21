import Head from 'next/head'
import HeaderContent from "./HeaderContent"
import React, { useContext } from "react"
import ThemeContext from "../themes/ThemeContext"
import { SiteContext } from "../utilities/SiteContext"

/**
 * An element to be placed in the <head> section of
 * a next.js application
 */
export default function NextHelmet(props) {
  return (
    <Head>
      <HeaderContent title={props.title} backgroundColor={props.backgroundColor} />
    </Head> 
  )
}
NextHelmet.defaultProps = {
  title: "Robbie Cook's Awesome Website",
  backgroundColor: 'red'
}