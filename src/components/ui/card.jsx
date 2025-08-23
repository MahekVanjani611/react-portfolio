import React from "react";

export const Card = ({ children, className }) => (
  <div className={className ? `card ${className}` : "card"}>{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h3 className={className ? `card-title ${className}` : "card-title"}>{children}</h3>
);

export const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);