import { IsMongoId } from "class-validator";
import { UserCreateDTO } from "./create.dto";

export class UserModifyDTO extends UserCreateDTO{
    @IsMongoId()
    id: string;
}