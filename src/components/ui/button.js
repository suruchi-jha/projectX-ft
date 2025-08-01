import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
