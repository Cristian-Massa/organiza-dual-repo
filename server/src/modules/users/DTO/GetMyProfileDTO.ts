import { IsMongoId } from 'class-validator';

export class GetMyProfileDTO {
  @IsMongoId()
  id: string;
}
