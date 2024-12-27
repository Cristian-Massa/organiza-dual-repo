import { Dispatch, SetStateAction } from "react";

import { Button } from "@/src/app/shared/components/buttons/Button";

interface ITab {
    label: string;
    id: number;
    setActiveTab: Dispatch<SetStateAction<number>>;
}

export function Tab({ label, id, setActiveTab }: ITab) {
    return (
        <Button
            className="p-4 text-center"
            onClick={() => setActiveTab(id)}
            buttonType="text"
        >
            {label}
        </Button>
    );
}
