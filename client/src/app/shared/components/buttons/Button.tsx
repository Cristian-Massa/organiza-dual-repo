"use client";

import { ReactNode } from "react";

interface ButtonProps<T> {
  buttonType?: "delete" | "cancel" | "default";
  onClick: (param?: T) => void;
  children: ReactNode;
}

export function Button<T>({ buttonType, onClick, children }: ButtonProps<T>) {
  let backgroundStyle: string;

  switch (buttonType) {
    case "default":
      backgroundStyle = "border transparent";
      break;
    case "delete":
      backgroundStyle = "bg-red-500";
      break;

    default:
      backgroundStyle = "border transparent";
      break;
  }
  return (
    <button
      onClick={() => onClick()}
      className={`py-2 px-4 text-white rounded-full ${backgroundStyle}`}
    >
      {children}
    </button>
  );
}
