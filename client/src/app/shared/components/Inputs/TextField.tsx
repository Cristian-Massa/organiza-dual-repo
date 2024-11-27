import { type InputHTMLAttributes } from "react";

type Type = "password" | "text" | "number" | "email";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
    type: Type;
}

export function TextField({ type, className, ...props }: ITextField) {
    return (
        <input
            type={type}
            className={`p-2 border rounded-lg ${className}`}
            {...props}
        />
    );
}
