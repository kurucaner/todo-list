import React from "react";

function Modal() {
  return (
    <div className="modal">
      <p>Are you sure you want to delete this todo?</p>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;
