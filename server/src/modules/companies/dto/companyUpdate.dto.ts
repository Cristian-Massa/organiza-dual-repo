import { ESector } from '@/modules/companies/enum/sector.enum';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CompanyUpdateDto {
  @IsNotEmpty()
  @IsMongoId()
  id: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  sector: ESector;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
