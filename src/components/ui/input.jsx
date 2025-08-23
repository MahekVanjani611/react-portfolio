import React from "react";

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  ...props
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`input ${className}`.trim()}
    {...props}
  />
);