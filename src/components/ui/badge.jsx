import React from "react";

export const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const variantClass =
    variant === "success"
      ? "badge-success"
      : variant === "error"
      ? "badge-error"
      : "badge-default";

  return (
    <span className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
};