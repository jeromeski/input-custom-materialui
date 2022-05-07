import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import "./styles.css";
import { FormGroup } from "./styled-form-components";
import StyledInput from "./StyledInput";

export default function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <React.Fragment>
      <Input />
      <Textarea />
      <FormGroup>
        <StyledInput onChange={handleChange} />
      </FormGroup>
    </React.Fragment>
  );
}
