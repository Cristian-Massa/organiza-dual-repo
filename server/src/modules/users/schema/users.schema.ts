import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../enums/role.enum';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ unique: true, sparse: true })
  email?: string;

  @Prop({ unique: true, sparse: true })
  phone?: string;

  @Prop()
  country?: string;

  @Prop()
  address?: string;

  @Prop()
  city?: string;

  @Prop({ default: '' })
  ownerOf: string;

  @Prop({ default: '' })
  employeeOf: string;

  @Prop({ default: false })
  isBanned: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  avatar?: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ enum: Role })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
