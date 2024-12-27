import { IsMongoId, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class UserCookieDTO {
  @IsMongoId()
  id: mongoose.Types.ObjectId;

  @IsString()
  username: string;
}
