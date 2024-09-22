import {
  IsEmail,
  IsMongoId,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UserModifyDTO {

  @IsMongoId()
  id: string;
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsString()
  address: string;

  @IsMongoId()
  country: string;

  @IsString()
  city: string;
}
