import React, { useState, useEffect } from "react"
import TransitionWrapper from "./TransitionWrapper"

// A component which transitions its children
export default function Transition(props) {
  const [loaded, setLoaded] = props.useState(false)
  props.useEffect(() => {
    setLoaded(true)
  })
  
  return (
    <TransitionWrapper loaded={loaded}>
      {props.children}
    </TransitionWrapper>
  )
}
Transition.defaultProps = {
  useState: useState, 
  useEffect: useEffect,
}