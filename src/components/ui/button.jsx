import React from "react";

export const Button = ({
  children,
  type = "button",
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}) => {
  const variantClass =
    variant === "outline"
      ? "btn-secondary"
      : "btn-primary";
  const sizeClass =
    size === "sm"
      ? "btn-sm"
      : size === "lg"
      ? "btn-lg"
      : "";

  return (
    <button
      type={type}
      className={`${variantClass} ${sizeClass} ${className}`.trim()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};