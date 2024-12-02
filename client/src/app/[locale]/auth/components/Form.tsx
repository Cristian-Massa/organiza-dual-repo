"use client";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { PhoneInput } from "react-international-phone";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/src/app/shared/components/containers/Container";
import { TextField } from "@/src/app/shared/components/Inputs/TextField";
import { Button } from "@/src/app/shared/components/buttons/Button";
import { RegisterSchema } from "@/src/app/[locale]/auth/components/Form/schema";
import "react-international-phone/style.css";
import "react-toastify/dist/ReactToastify.css";
enum ResetField {
    EMAIL = "email",
    PHONE = "phone",
}

interface IFormInputs {
    username: string;
    password: string;
    confirmPassword: string;

    email?: string;
    phone?: string;
    country?: string;
}

export function Form() {
    const {
        handleSubmit,
        getValues,
        control,
        resetField,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: zodResolver(RegisterSchema),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
    });

    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const onSubmit: SubmitHandler<IFormInputs> = (data) =>
        console.log(getValues());

    useEffect(() => {
        Object.values(errors).forEach((error) => {
            toast(error.message, {});
        });
    }, [errors]);
    return (
        <>
            <Container className={"min-h-[400px] min-w-[300px] max-w-[400px]"}>
                <h1 className="text-center">Registrate</h1>
                <p className="text-center">
                    Completa el formulario y comienza a organizar tu empresa.
                </p>
                <form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col ">
                        <label>Username</label>
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
                    <>
                        <label>Phone</label>
                        <Controller
                            defaultValue=""
                            name="phone"
                            control={control}
                            render={({ field }) => {
                                return (
                                    <>
                                        <PhoneInput
                                            {...field}
                                            defaultCountry="uy"
                                            value={field.value}
                                            onChange={(phone) =>
                                                field.onChange(phone)
                                            }
                                            inputProps={{
                                                className: `rounded-r-lg border ${errors.phone && "border-red-700"} w-full`,
                                            }}
                                        />
                                    </>
                                );
                            }}
                        />
                    </>
                    <>
                        <label>Email</label>
                        <Controller
                            defaultValue=""
                            name="email"
                            control={control}
                            render={({ field, fieldState }) => {
                                return (
                                    <>
                                        <TextField
                                            {...field}
                                            value={field.value}
                                            onChange={(email) => {
                                                field.onChange(email);
                                            }}
                                            error={!!fieldState.error}
                                        />
                                    </>
                                );
                            }}
                        />
                    </>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col ">
                            <label>Password</label>
                            <Controller
                                defaultValue=""
                                name="password"
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <TextField
                                                {...field}
                                                value={field.value}
                                                onChange={(password) => {
                                                    field.onChange(password);
                                                }}
                                                type={
                                                    !isVisiblePassword
                                                        ? "password"
                                                        : "text"
                                                }
                                                error={!!fieldState.error}
                                            />
                                        </>
                                    );
                                }}
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label>Confirm password</label>
                            <Controller
                                defaultValue=""
                                name="confirmPassword"
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <TextField
                                                {...field}
                                                value={field.value}
                                                onChange={(password) => {
                                                    field.onChange(password);
                                                }}
                                                type={
                                                    !isVisiblePassword
                                                        ? "password"
                                                        : "text"
                                                }
                                                error={!!fieldState.error}
                                            />
                                        </>
                                    );
                                }}
                            />
                        </div>
                        <div className="place-self-center">
                            <Button
                                onClick={() =>
                                    setIsVisiblePassword((prev) => !prev)
                                }
                            >
                                Ver Contraseña
                            </Button>
                        </div>
                    </div>

                    <Button type="submit">Register</Button>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint,{" "}
                            <Link href="login">
                                <b>Login</b>
                            </Link>
                            !
                        </p>
                    </div>
                </form>
            </Container>
            <ToastContainer />
        </>
    );
}
