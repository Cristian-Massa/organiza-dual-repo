import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { User } from "../../users/schema/user.schema";
import { Planner } from '../../planners/schema/planner.schema';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company{

    @Prop()
    name: string;

    @Prop()
    sector: string;

    @Prop()
    city: string;

    @Prop()
    address: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    owner: User;
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    employee: User[] | null;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Planner'})
    planner: Planner[] | null;
};

export const CompanySchema = SchemaFactory.createForClass(Company)