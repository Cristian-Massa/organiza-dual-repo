import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@/src/app/shared/components/Inputs/TextField";

export function UsernameAuthForm() {
    const { control } = useFormContext();
    return (
        <div className="flex flex-col ">
            <label>Lorem</label>
            <Controller
                defaultValue=""
                name="username"
                control={control}
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <TextField
                                {...field}
                                value={field.value}
                                onChange={(name) => {
                                    field.onChange(name);
                                }}
                                error={!!fieldState.error}
                                type="text"
                            />
                        </>
                    );
                }}
            />
        </div>
    );
}