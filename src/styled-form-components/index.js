import styled from "styled-components/macro";
import { compose, layout, space } from "styled-system";

export const FormGroup = styled.div`
  display: flex;
`;

export const FormControl = styled.div`
  box-sizing: border-box;
  margin-top: 1em;
  width: 100%;
  border: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
`;

export const FormLabel = styled.label`
  &.formLabel {
    display: block;
    transform-origin: top left;

    top: 0;
    left: 0;
    position: absolute;
    transform: translate(0, 24px) scale(1);

    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    z-index: 1;
    transform: translate(12px, 20px) scale(1);
    pointer-events: none;

    color: grey;
    padding: 0;
    font-size: 1.2rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
  }
  &.shrink {
    color: #c5a334;
    transform: translate(12px, 10px) scale(0.7);
  }

  &.gray {
    color: grey !important;
  }
`;

const fiw = {
  cursor: "text",
  display: "inline-flex",
  fontSize: "1rem",
  boxSizing: "border-box",
  alignItems: "center",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: 300,
  lineHeight: "1.1876em",
  "letter-spacing": "0.00938em",

  width: "100%",

  position: "relative",
  transition: "background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
  "border-top-left-radius": "4px",
  "border-top-right-radius": "4px",

  color: "#c5a334",
  "font-size": "1.25rem",
  "background-color": "#2b2b2b"
};

export const FormInnerWrapper = styled.div`
  ${fiw}
  &::before {
    left: 0;
    right: 0;
    bottom: 0;
    content: "\00a0";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;
  }
  &::after {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    border-bottom: 2px solid #c5a334;
    pointer-events: none;
  }
  &.expand {
    &::after {
      transform: scaleX(1);
    }
  }
`;

/* color: rgba(0, 0, 0, 0.87); */

export const FormInput = styled.input`
  font: inherit;
  color: inherit;
  width: 100%;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;

  padding: 27px 12px 10px;
`;

/*
&:before {
    left: 0;
    right: 0;
    bottom: 0;
    content: "\00a0";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;
  }

  &:after {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    border-bottom: 2px solid #c5a334;
    pointer-events: none;
  }

*/
