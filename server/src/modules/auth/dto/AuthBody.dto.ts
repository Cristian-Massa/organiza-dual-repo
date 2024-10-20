import { IsEmail, IsOptional, IsString } from 'class-validator';

export class AuthBodyDTO {
  @IsString()
  strategy: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  password: string;
}
