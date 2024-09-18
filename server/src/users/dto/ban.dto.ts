import { IsBoolean, IsDateString, IsMongoId } from "class-validator";

export class UserBanDTO{
    @IsMongoId()
    id: string;

    @IsBoolean()
    isTemp?: boolean;

    @IsDateString()
    expire?: Date;
}