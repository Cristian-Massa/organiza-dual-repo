import { ReactNode } from "react";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/src/app/shared/components/buttons/Button";
import { DEFAULTBUTTON } from "@/src/app/shared/constants/gradients";

interface IChips {
    children: ReactNode;
}

export function Chip({ children }: IChips) {
    return (
        <div
            className={`flex py-1 px-2 rounded-full items-baseline ${DEFAULTBUTTON}`}
        >
            <p className="text-white text-nowrap select-none">{children}</p>
            <Button className="w-4 h-4 ml-2" buttonType="text">
                <FontAwesomeIcon icon={faClose} className="text-white" />
            </Button>
        </div>
    );
}
