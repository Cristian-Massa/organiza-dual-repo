import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/users/schema/user.schema';

export type CountryDocument = mongoose.HydratedDocument<Country>;

@Schema()
export class Country{
    @Prop()
    country: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User[];
}


export const CountrySchema = SchemaFactory.createForClass(Country)