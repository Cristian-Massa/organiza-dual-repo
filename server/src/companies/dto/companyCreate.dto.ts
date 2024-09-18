import { IsMongoId, IsString } from "class-validator";
import { isObjectIdOrHexString } from "mongoose";

export class CompanyCreateDTO{
    @IsString()
    name: string;

    @IsMongoId()
    sector: string;

    
    @IsMongoId()
    owner: string;
    
    @IsString()
    address: string;
    
    @IsString()
    city: string;
    
    @IsMongoId()
    country: string;

    
}