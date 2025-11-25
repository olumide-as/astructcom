import React from "react";

interface ButtonWithArrowProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const Button1: React.FC<ButtonWithArrowProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block text-white bg-[#444598] px-8 py-4 rounded-none border border-white shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:bg-[#ffbd59] hover:text-[#444598] transition cursor-pointer ${className || ""}`}
    >
      {label}
    </button>
  );
};

export default Button1;
