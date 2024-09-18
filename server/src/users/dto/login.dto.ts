import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class UserLoginDTO{
    @IsEmail()
    email?: string;

    @IsPhoneNumber()
    phone?: string

    @IsString()
    password: string
}