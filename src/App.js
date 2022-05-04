import React, { useEffect, useState } from "react";
import Input from "./Input";
import "./styles.css";
import Textarea from "./Textarea";

export default function App() {
  return (
    <React.Fragment>
      <Input />
      <Textarea />
    </React.Fragment>
  );
}
