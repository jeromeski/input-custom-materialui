import {
  FormControl,
  FormInnerWrapper,
  FormInput,
  FormLabel
} from "./styled-form-components";

function StyledInput({ onChange }) {
  const handleFocus = (e) => {
    if (e.target.value) {
      e.target.parentNode.parentNode
        .querySelector(".formLabel")
        .classList.remove("gray");
      return;
    }
    e.target.parentNode.classList.add("expand");
    e.target.parentNode.parentNode
      .querySelector(".formLabel")
      .classList.add("shrink");
  };

  const handleBlur = (e) => {
    if (e.target.value) {
      e.target.parentNode.parentNode
        .querySelector(".formLabel")
        .classList.add("gray");
      return;
    }
    e.target.parentNode.classList.remove("expand");
    e.target.parentNode.parentNode
      .querySelector(".formLabel")
      .classList.remove("shrink");
  };
  return (
    <FormControl>
      <FormLabel className="formLabel">Hello</FormLabel>
      <FormInnerWrapper>
        <FormInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
        />
      </FormInnerWrapper>
    </FormControl>
  );
}

export default StyledInput;
