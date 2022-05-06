import { useEffect, useState } from "react";

function Input() {
  const handleFocus = (e) => {
    if (e.target.value) {
      e.target.parentNode.parentNode
        .querySelector(".form-label")
        .classList.remove("gray");
      return;
    }
    e.target.parentNode.classList.add("expand");
    e.target.parentNode.parentNode
      .querySelector(".form-label")
      .classList.add("shrink");
  };

  const handleBlur = (e) => {
    if (e.target.value) {
      e.target.parentNode.parentNode
        .querySelector(".form-label")
        .classList.add("gray");
      return;
    }
    e.target.parentNode.classList.remove("expand");
    e.target.parentNode.parentNode
      .querySelector(".form-label")
      .classList.remove("shrink");
  };

  return (
    <div className="form-item">
      <div className="form-control">
        <label className="form-label">Name</label>
        <div className="form-inner-wrapper">
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
