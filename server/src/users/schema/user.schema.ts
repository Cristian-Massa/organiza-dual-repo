import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Company } from '../../companies/schema/company.schema';
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

    @Prop({ type:  Object })

    banned: Banned;

    @Prop()
    country: string;
    
    @Prop()
    address: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
    owner: Company | null;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
    employee: Company | null;
}


export const UserSchema = SchemaFactory.createForClass(User)