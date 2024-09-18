import { IsInt, IsMongoId } from "class-validator";

export class UserGetAllDTO{
    @IsInt()
    page: number;

}