import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import "./styles.css";

import StyledInput from "./StyledInput";

export default function App() {
  return (
    <React.Fragment>
      <Input />
      <Textarea />
      <StyledInput />
    </React.Fragment>
  );
}
