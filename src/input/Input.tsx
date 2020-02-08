import * as React from "react";

interface Props {
  placeholder?: string;
}

const Input: React.FC<Props> = ({ }) => {
  <label>Enter your name: <input id="name" type="text" size="30"></label>
}

export default Input;