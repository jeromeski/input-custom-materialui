import { useEffect, useState } from "react";

function Input() {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  useEffect(() => {
    if (focused) {
      document.querySelector(".form-input-wrapper").classList.add("expand");
    }
    if (!focused) {
      document.querySelector(".form-input-wrapper").classList.remove("expand");
    }
  }, [focused]);

  return (
    <div className="form-item">
      <div className="form-control">
        <label className={`form-label ${focused ? "shrink" : ""}`}>Name</label>
        <div className="form-input-wrapper">
          <input
            className="form-input"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
