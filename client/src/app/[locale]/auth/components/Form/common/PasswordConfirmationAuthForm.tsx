"use client";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@/src/app/shared/components/Inputs/TextField";

export function PasswordCOnfirmationAuthForm() {
    const { control } = useFormContext();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };
    return (
        <div className="flex flex-col ">
            <label>Lorem</label>
            <Controller
                defaultValue=""
                name="confirmPassword"
                control={control}
                render={({ field, fieldState }) => {
                    return (
                        <div className="flex items-center">
                            <TextField
                                {...field}
                                value={field.value}
                                onChange={(name) => {
                                    field.onChange(name);
                                }}
                                error={!!fieldState.error}
                                type={isVisible ? "text" : "password"}
                                className="rounded-r-none border-r-0 w-full"
                            />
                            <span
                                className="border p-2 px-4 rounded-r-lg"
                                onClick={toggleVisibility}
                            >
                                {isVisible ? (
                                    <FontAwesomeIcon icon={faEye} />
                                ) : (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                )}
                            </span>
                        </div>
                    );
                }}
            />
        </div>
    );
}
