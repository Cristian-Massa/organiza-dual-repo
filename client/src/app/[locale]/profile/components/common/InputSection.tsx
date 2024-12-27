import { Dispatch, SetStateAction } from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TextField } from "@/src/app/shared/components/Inputs/TextField";
import { Button } from "@/src/app/shared/components/buttons/Button";

interface IInputSection {
    isDisabled?: boolean;
    defaultValue: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    title: string;
    icon: IconProp;
    setValue?: Dispatch<SetStateAction<string>>;
}

export function InputSection({
    isDisabled,
    defaultValue,
    onClick,
    icon,
    title,
    setValue,
}: IInputSection) {
    function changeValue(event: React.ChangeEvent<HTMLInputElement>): void {
        if (setValue) {
            setValue(event.target.value);
        }
    }

    return (
        <div>
            <h6>{title}</h6>
            <span className="flex items-center gap-4">
                <TextField
                    onChange={setValue && changeValue}
                    className="truncate"
                    disabled={isDisabled}
                    defaultValue={defaultValue}
                />
                <Button
                    className={` hover:from-purple-700 hover:to-pink-500 hover:bg-gradient-to-tl w-6 h-6 justify-center items-center rounded-full transition-all duration-100`}
                    onClick={onClick}
                    buttonType="text"
                >
                    <FontAwesomeIcon icon={icon} size="lg" />
                </Button>
            </span>
        </div>
    );
}
