import { IsMongoId } from 'class-validator';

export class CompanyAddEmployeeDto {
  @IsMongoId()
  id: string;
  @IsMongoId()
  employee: string;
}
