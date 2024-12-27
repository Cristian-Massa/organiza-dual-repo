import { IsEmail, IsString } from 'class-validator';

export class AuthBodyDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
