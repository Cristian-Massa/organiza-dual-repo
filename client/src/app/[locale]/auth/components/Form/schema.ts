import { type ZodType, z } from "zod";
const numberFinder = /[0-9]/;
const CapitalizeFinder = /[A-Z]/;
const SpecialFinder = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|`~]/;

const passwordValidation = z
    .string()
    .min(8, "Tu contraseña es muy corta.")
    .superRefine((val, ctx) => {
        if (!numberFinder.test(val)) {
            ctx.addIssue({
                code: "custom",
                message: "Deberías agregar un número.",
            });
        }
        if (!CapitalizeFinder.test(val)) {
            ctx.addIssue({
                code: "custom",
                message: "Deberías agregar al menos una mayúscula.",
            });
        }
        if (!SpecialFinder.test(val)) {
            ctx.addIssue({
                code: "custom",
                message: "Deberías agregar al menos un caracter especial.",
            });
        }
    });

const usernameValidation: ZodType = z
    .string()
    .min(1, "Tu usuario no puede estar vacío.");

export const RegisterSchema: ZodType = z
    .object({
        username: usernameValidation,
        email: z.string().email("Tu correo electronico esta mal escrito."),
        phone: z.string().min(5, "Tu numero de telefono no puede estar vacio."),
        password: passwordValidation,
        confirmPassword: z.string().min(1, "Debes confirmar tu contraseña."),
    })
    .refine((schema) => schema.password === schema.confirmPassword, {
        message:
            "La confirmación de contraseña debe ser igual a la contraseña.",
        path: ["confirmPassword"],
    });

export const LoginSchema: ZodType = z.object({
    username: usernameValidation,
    password: passwordValidation,
});
