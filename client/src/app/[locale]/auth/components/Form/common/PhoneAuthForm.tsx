import { Controller, useFormContext } from "react-hook-form";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
export function PhoneAuthForm() {
    const { control } = useFormContext();
    return (
        <div className="flex flex-col ">
            <label>Lorem</label>
            <Controller
                defaultValue=""
                name="phone"
                control={control}
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <PhoneInput
                                defaultCountry="uy"
                                value={field.value}
                                onChange={(phone) => field.onChange(phone)}
                                inputProps={{
                                    className: `w-full border rounded-r-lg ${!!fieldState.error && "border-red-700"}`,
                                }}
                            />
                        </>
                    );
                }}
            />
        </div>
    );
}
