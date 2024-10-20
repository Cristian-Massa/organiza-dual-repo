import { ESector } from '@/modules/companies/enum/sector.enum';
import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class CompanyCreateDto {
  @IsMongoId()
  @IsNotEmpty()
  idOwner: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  sector: ESector;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  country: string;

  @IsOptional()
  avatar?: string;
}
