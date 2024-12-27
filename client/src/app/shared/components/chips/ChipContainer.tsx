"use client";

import { useEffect, useState } from "react";

import { Chip } from "@/src/app/shared/components/chips/Chip";

interface IChipContainer {
    services: string[];
}

export function ChipContainer({ services }: IChipContainer) {
    const [isClickPressed, setIsClickPressed] = useState(false);
    const [position, setPosition] = useState(0);
    const scrolleableContainer = document.querySelector(".overflow-scroll");
    return (
        <div
            onMouseDown={(e) => {
                setIsClickPressed(true);
                setPosition(e.clientX);
            }}
            onMouseUp={() => setIsClickPressed(false)}
            onMouseLeave={() => setIsClickPressed(false)}
            onMouseMove={(e) => {
                if (isClickPressed) {
                    scrolleableContainer?.scrollBy(position - e.clientX, 0);
                }
            }}
            className="flex gap-2 overflow-scroll smooth-scrollbar no-scrollbar w-60 pt-2"
        >
            {services.map((service, index) => (
                <Chip key={`${service}-${index}`}>{service}</Chip>
            ))}
        </div>
    );
}
