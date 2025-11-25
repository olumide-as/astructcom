

"use client";
import React from "react";

interface Button2Props {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button2: React.FC<Button2Props> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border border-[#251D4B] bg-transparent text-[#251D4B] px-6 py-2 font-medium hover:bg-[#251D4B] hover:text-white transition-colors duration-300 ${className || ""}`}
    >
      {label}
    </button>
  );
};

export default Button2;