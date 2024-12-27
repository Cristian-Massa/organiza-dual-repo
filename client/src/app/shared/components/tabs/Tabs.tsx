import { Children, ReactNode } from "react";

interface ITabs {
    children: ReactNode;
    activeTab: number;
}
export function Tabs({ children, activeTab }: ITabs) {
    const childrenCount = Math.floor(100 / Children.count(children));
    const translateToActiveTab = Math.ceil(100 * activeTab - 100);
    return (
        <div className="w-full">
            <div
                style={{
                    gridTemplateColumns: `repeat(${Children.count(children)}, minmax(0, 1fr))`,
                }}
                className={`grid`}
            >
                {children}
            </div>
            <div className="h-1 w-full ">
                <div
                    style={{
                        width: `${childrenCount}%`,
                        transform: `translateX(${translateToActiveTab}%)`,
                    }}
                    className={`bg-violet-600 h-1 transition-transform duration-100`}
                />
            </div>
        </div>
    );
}
