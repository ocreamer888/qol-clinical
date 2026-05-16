"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white" | "dark";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-[#20433d] text-white hover:bg-[#1a3531] focus:ring-[#20433d]",
    secondary:
      "bg-white text-[#244841] hover:bg-gray-100 focus:ring-white",
    white:
      "bg-white text-[#28574e] hover:bg-gray-100 focus:ring-white",
    dark:
      "bg-[#1e232f] text-white hover:bg-[#2a303c] focus:ring-[#1e232f]",
  };

  const sizeStyles = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
