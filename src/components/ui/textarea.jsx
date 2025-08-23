import React from "react";

export const Textarea = ({
  value,
  onChange,
  placeholder = "",
  className = "",
  rows = 4,
  ...props
}) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`textarea ${className}`.trim()}
    rows={rows}
    {...props}
  />
);