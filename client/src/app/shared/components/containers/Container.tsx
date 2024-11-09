import { ReactNode } from "react";
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    sx?: string;
}

export function Container({ children, sx, ...props }: ContainerProps) {
    return (
        <div
            className={`p-4 rounded-[20px] overflow-hidden shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] ${sx}`}
            {...props}
        >
            {children}
        </div>
    );
}
