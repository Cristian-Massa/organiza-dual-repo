"use client";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import Link from "next/link";
import { Container } from "@/src/app/shared/components/containers/Container";
import { TextField } from "@/src/app/shared/components/Inputs/TextField";
import "react-international-phone/style.css";
import { Button } from "@/src/app/shared/components/buttons/Button";

enum ResetField {
    EMAIL = "contact.email",
    PHONE = "contact.phone",
}

interface IContact {
    email?: string;
    phone?: string;
}

interface IFormInputs {
    username: string;
    password: {
        primary: string;
        secondary: string;
    };
    contact: Pick<IContact, "email" | "phone"> | IContact;
    country?: string;
}

export function Form() {
    const { handleSubmit, getValues, control, resetField } =
        useForm<IFormInputs>();
    const [typeOfRegisterSelected, setTypeOfRegisterSelected] =
        useState<number>(2);
    const onSubmit: SubmitHandler<IFormInputs> = (data) =>
        console.log(getValues());

    const changeSelectedTypeOfRegister = (
        e: React.MouseEvent<HTMLButtonElement>,
    ) => {
        e.preventDefault();
        const id = Number(e.currentTarget.id);
        if (id === 0) {
            resetField(ResetField.EMAIL);
        } else if (id === 1) {
            resetField(ResetField.PHONE);
        }
        setTypeOfRegisterSelected(id);
    };
    return (
        <Container className={"min-h-[400px] min-w-[300px] max-w-[400px]"}>
            <h1 className="text-center">Registrate</h1>
            <p className="text-center">
                Completa el formulario y comienza a organizar tu empresa.
            </p>
            <form
                className="flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col ">
                    <label>Username</label>
                    <Controller
                        defaultValue=""
                        name="username"
                        control={control}
                        render={({ field }) => {
                            return (
                                <TextField
                                    {...field}
                                    value={field.value}
                                    onChange={(name) => {
                                        field.onChange(name);
                                    }}
                                    type="text"
                                    required
                                />
                            );
                        }}
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2 justify-center">
                        <Button
                            id="0"
                            className={`${typeOfRegisterSelected === 0 && "from-violet-500 to-pink-300"}`}
                            onClick={changeSelectedTypeOfRegister}
                        >
                            Telefono
                        </Button>
                        <Button
                            id="1"
                            className={`${typeOfRegisterSelected === 1 && "from-violet-500 to-pink-300"}`}
                            onClick={changeSelectedTypeOfRegister}
                        >
                            Email
                        </Button>
                        <Button
                            id="2"
                            className={`${typeOfRegisterSelected === 2 && "from-violet-500 to-pink-300"}`}
                            onClick={changeSelectedTypeOfRegister}
                        >
                            Ambos
                        </Button>
                    </div>
                    {typeOfRegisterSelected === 0 ||
                    typeOfRegisterSelected === 2 ? (
                        <>
                            <label>Phone</label>
                            <Controller
                                defaultValue=""
                                name="contact.phone"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <PhoneInput
                                            {...field}
                                            required
                                            defaultCountry="uy"
                                            value={field.value}
                                            onChange={(phone) =>
                                                field.onChange(phone)
                                            }
                                            className="even:w-full"
                                        />
                                    );
                                }}
                            />
                        </>
                    ) : null}
                    {typeOfRegisterSelected === 1 ||
                    typeOfRegisterSelected === 2 ? (
                        <>
                            <label>Email</label>
                            <Controller
                                defaultValue=""
                                name="contact.email"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <TextField
                                            {...field}
                                            value={field.value}
                                            onChange={(email) => {
                                                field.onChange(email);
                                            }}
                                            type="email"
                                            required
                                        />
                                    );
                                }}
                            />
                        </>
                    ) : null}
                </div>
                <div className="flex flex-col ">
                    <label>Password</label>
                    <Controller
                        defaultValue=""
                        name="password.primary"
                        control={control}
                        render={({ field }) => {
                            return (
                                <TextField
                                    {...field}
                                    value={field.value}
                                    onChange={(password) => {
                                        field.onChange(password);
                                    }}
                                    type="password"
                                    required
                                />
                            );
                        }}
                    />
                </div>
                <div className="flex flex-col ">
                    <label>Confirm password</label>
                    <Controller
                        defaultValue=""
                        name="password.secondary"
                        control={control}
                        render={({ field }) => {
                            return (
                                <TextField
                                    {...field}
                                    value={field.value}
                                    onChange={(confirmPassword) => {
                                        field.onChange(confirmPassword);
                                    }}
                                    type="password"
                                    required
                                />
                            );
                        }}
                    />
                </div>
                <Button type="submit">Register</Button>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint,{" "}
                        <Link href="login">
                            <b>Login</b>
                        </Link>
                        !
                    </p>
                </div>
            </form>
        </Container>
    );
}
