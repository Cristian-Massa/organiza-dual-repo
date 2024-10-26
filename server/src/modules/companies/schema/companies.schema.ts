import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ESector } from '../enum/sector.enum';

export type CompanyDocument = HydratedDocument<Company>;
@Schema()
export class Company {
  @Prop({
    required: true,
    unique: true,
    sparse: true,
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

  @Prop({ default: [], type: [String] })
  employees: string[];
}

export const CompanySchema = SchemaFactory.createForClass(Company);
