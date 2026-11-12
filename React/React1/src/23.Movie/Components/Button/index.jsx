import React from "react";
import "./index.scss";

const index = ({ title, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="b-button">
      {title}
    </button>
  );
};

export default index;
