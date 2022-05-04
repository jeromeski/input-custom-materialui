import { useEffect, useState } from "react";

function Textarea() {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  useEffect(() => {
    if (focused) {
      document.querySelector(".form-textarea-wrapper").classList.add("expand");
    }
    if (!focused) {
      document
        .querySelector(".form-textarea-wrapper")
        .classList.remove("expand");
    }
  }, [focused]);
  return (
    <div className="form-item">
      <div className="form-control">
        <label className={`form-label ${focused ? "shrink" : ""}`}>
          Message
        </label>
        <div className="form-textarea-wrapper">
          <textarea
            rows="3"
            className="form-textarea"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </div>
  );
}

export default Textarea;
