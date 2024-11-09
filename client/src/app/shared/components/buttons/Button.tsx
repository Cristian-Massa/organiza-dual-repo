"use client";

import { ReactNode } from "react";
import { DEFAULTBUTTON } from "@/src/app/shared/constants/gradients";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "delete" | "cancel" | "close";
  children: ReactNode;
}

export function Button({ buttonType, children, ...props }: ButtonProps) {
  let gradientBg = DEFAULTBUTTON;
  if (buttonType === "delete") {
    gradientBg = "from-red-700 to-red-400";
  }
  if (buttonType === "cancel" || buttonType === "close") {
    gradientBg = "";
  }
  return (
    <button
      className={`inline-block px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl ${gradientBg} leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs`}
      {...props}
    >
      {children}
    </button>
  );
}
