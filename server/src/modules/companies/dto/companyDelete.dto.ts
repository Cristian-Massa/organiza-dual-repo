import { IsMongoId, IsNotEmpty } from 'class-validator';

export class CompanyDeleteDto {
  @IsMongoId()
  @IsNotEmpty()
  idOwner: string;
}
