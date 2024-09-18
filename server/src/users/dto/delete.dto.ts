import { IsMongoId } from "class-validator";

export class UserDeleteDTO{
    @IsMongoId()
    id: string;
}