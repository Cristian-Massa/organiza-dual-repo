import { IsMongoId } from 'class-validator';
import mongoose from 'mongoose';

export class LogoutBodyDTO {
  @IsMongoId()
  id: mongoose.Types.ObjectId;
}
