import { type HTMLAttributes, type ReactNode } from "react";
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div
            className={`p-4 rounded-[20px] overflow-hidden shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] bg-white ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
