import styled, { css } from "styled-components/macro";
import { flexbox, compose, layout, space } from "styled-system";

export const FormGroup = styled.div`
  display: flex;
  ${compose(layout, space)}
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

export const FormInnerWrapper = styled.div`
  /* color: rgba(0, 0, 0, 0.87); */
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;

  width: 100%;

  position: relative;
  transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  background-color: rgba(0, 0, 0, 0.09);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  color: #c5a334;
  font-size: 1.25rem;
  background-color: #2b2b2b;
`;

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
