"use client";

import { ReactNode } from "react";
import { DEFAULTBUTTON } from "@/src/app/shared/constants/gradients";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: "delete" | "cancel" | "text";
    children: ReactNode;
}

export function Button({
    buttonType,
    className,
    children,
    ...props
}: ButtonProps) {
    let gradientBg = `${DEFAULTBUTTON} text-white`;
    if (buttonType === "delete") {
        gradientBg = "from-red-700 to-red-400";
    }
    if (buttonType === "text") {
        gradientBg = "text-black";
    }
    return (
        <button
            className={`inline-block px-6 py-3 mb-4 font-bold text-center  uppercase align-middle transition-all rounded-lg cursor-pointer ${gradientBg} leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
