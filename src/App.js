import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import "./styles.css";
import {
  FormControl,
  FormInnerWrapper,
  FormInput,
  FormItem,
  FormLabel
} from "./styled-form-components";

export default function App() {
  return (
    <React.Fragment>
      <Input />
      <Textarea />
      <FormItem>
        <FormControl>
          <FormLabel>Hello</FormLabel>
          <FormInnerWrapper>
            <FormInput />
          </FormInnerWrapper>
        </FormControl>
      </FormItem>
    </React.Fragment>
  );
}
