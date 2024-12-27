"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import "react-international-phone/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Login } from "@/src/app/[locale]/auth/components/Form/Login";
import { Register } from "@/src/app/[locale]/auth/components/Form/Register";
import {
    LoginSchema,
    RegisterSchema,
} from "@/src/app/[locale]/auth/components/Form/schema";
import { IFormInputs } from "@/src/app/[locale]/auth/components/Form/types/form";
import { usePostUser } from "@/src/app/hooks/mutations/usePostUser";
import { Button } from "@/src/app/shared/components/buttons/Button";
import { Container } from "@/src/app/shared/components/containers/Container";

export function Form() {
    const [formActive, setFormActive] = useState("login");
    const post = usePostUser(formActive);
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
                    className={"min-h-[400px] min-w-[300px] max-w-[400px] p-4"}
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
                            disabled={post.isPending}
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
                            post.mutate(data);
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
