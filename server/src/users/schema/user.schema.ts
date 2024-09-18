import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Country } from 'src/common/schema/country.schema';
import { Company } from 'src/companies/schema/company.schema';
import { Tier } from '../enums/Tiers.enum';
import { Banned } from '../interface/Banned.interface';

export type UserDocument = mongoose.HydratedDocument<User>;



@Schema()
export class User{
    @Prop()
    username: string;
    
    @Prop()
    password: string;
    
    @Prop()
    email: string;
    
    @Prop()
    city: string;
    
    @Prop()
    isAdmin: boolean;

    @Prop()
    tier: Tier;

    @Prop()
    banned: Banned;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Country'})
    country: Country;
    
    @Prop()
    address: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
    owner: Company | null;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
    employee: Company | null;
}


export const UserSchema = SchemaFactory.createForClass(User)