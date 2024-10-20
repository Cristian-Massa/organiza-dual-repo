import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ESector } from '../enum/sector.enum';

export type CompanyDocument = HydratedDocument<Company>;
@Schema()
export class Company {
  @Prop({
    required: true,
    unique: true,
    sparse: true,
    type: { id: mongoose.Schema.Types.ObjectId },
  })
  idOwner: string;

  @Prop({ required: true })
  sector: ESector;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  country: string;

  @Prop()
  avatar?: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: false })
  isBanned: boolean;

  @Prop({ default: null })
  deletedAt: Date | null;

  @Prop({ defualt: null })
  employees: string[] | null;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
