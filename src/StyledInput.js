// import { useEffect, useState } from "react";
// import {
//   FormControl,
//   FormInnerWrapper,
//   FormInput,
//   FormItem,
//   FormLabel
// } from "./styled-form-components";

// function StyledInput() {
//   const [focused, setFocused] = useState(false);
//   const handleFocus = () => {
//     setFocused(true);
//   };

//   const handleBlur = () => {
//     setFocused(false);
//   };

//   useEffect(() => {
//     if (focused) {
//       document.querySelector(".form-input-wrapper").classList.add("expand");
//     }
//     if (!focused) {
//       document.querySelector(".form-input-wrapper").classList.remove("expand");
//     }
//   }, [focused]);
//   return (
//     <FormItem>
//       <FormControl>
//         <FormLabel>Hello</FormLabel>
//         <FormInnerWrapper>
//           <FormInput onFocus={handleFocus} onHover={handleBlur} />
//         </FormInnerWrapper>
//       </FormControl>
//     </FormItem>
//   );
// }

// export default StyledInput;
