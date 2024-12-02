"use client";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/src/app/shared/components/containers/Container";
import {
    LoginSchema,
    RegisterSchema,
} from "@/src/app/[locale]/auth/components/Form/schema";
import "react-international-phone/style.css";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/src/app/shared/components/buttons/Button";
import { Login } from "@/src/app/[locale]/auth/components/Form/Login";
import { Register } from "@/src/app/[locale]/auth/components/Form/Register";
interface IFormInputs {
    username: string;
    password: string;
    confirmPassword: string;

    email?: string;
    phone?: string;
    country?: string;
}

export function Form() {
    const [formActive, setFormActive] = useState("login");
    const methods = useForm<IFormInputs>({
        resolver: zodResolver(
            formActive === "login" ? LoginSchema : RegisterSchema,
        ),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
    });
    const handleFormActive = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFormActive(e.currentTarget.id);
    };
    useEffect(() => {
        Object.values(methods.formState.errors).forEach((error) => {
            toast(error.message, {});
        });
    }, [methods.formState.errors]);
    return (
        <>
            <FormProvider {...methods}>
                <Container
                    className={"min-h-[400px] min-w-[300px] max-w-[400px]"}
                >
                    <div className=" border-b flex justify-between">
                        <Button
                            onClick={handleFormActive}
                            id="login"
                            buttonType={
                                formActive === "login" ? undefined : "text"
                            }
                        >
                            Login
                        </Button>
                        <Button
                            onClick={handleFormActive}
                            id="register"
                            buttonType={
                                formActive === "register" ? undefined : "text"
                            }
                        >
                            Register
                        </Button>
                    </div>
                    <form
                        onSubmit={methods.handleSubmit((data) => {
                            console.log(data);
                        })}
                    >
                        {formActive === "login" ? <Login /> : <Register />}
                    </form>
                </Container>
            </FormProvider>
            <ToastContainer />
        </>
    );
}
