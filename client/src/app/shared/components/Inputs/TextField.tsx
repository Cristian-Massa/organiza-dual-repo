import { type InputHTMLAttributes } from "react";

type Type = "password" | "text" | "number" | "email";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
    type?: Type;
    error?: boolean;
}

export function TextField({ error, type, className, ...props }: ITextField) {
    return (
        <input
            type={type}
            className={`p-2 border rounded-lg ${className} ${error && "border-red-700 focus:border-red-700 "}`}
            {...props}
        />
    );
}
