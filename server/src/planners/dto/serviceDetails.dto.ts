import { IsInt, IsString } from "class-validator";

export class ServiceDetailsDTO{
    @IsString()
    name: string;

    @IsInt()
    sessions: number;
}