import React from "react";

const Checkbox = ({ label, checked, onChange, id }) => {
  return (
    <div className="flex items-center gap-2 text-white">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
