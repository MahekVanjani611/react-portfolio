import React from "react";

export const Label = ({
  children,
  htmlFor,
  className = "",
  ...props
}) => (
  <label
    htmlFor={htmlFor}
    className={`label ${className}`.trim()}
    {...props}
  >
    {children}
  </label>
);