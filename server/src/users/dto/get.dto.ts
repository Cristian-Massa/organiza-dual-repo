import { IsBoolean, IsDateString, IsMongoId } from "class-validator";

export class UserGetDTO{
    @IsMongoId()
    id: string;
}