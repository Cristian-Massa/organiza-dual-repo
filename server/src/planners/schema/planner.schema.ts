import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Company } from "src/companies/schema/company.schema";
import { ServiceDetailsDTO } from "../dto/serviceDetails.dto";
import { User } from "src/users/schema/user.schema";

export type PlannerDocument = HydratedDocument<Planner>

@Schema()
export class Planner{
    @Prop()
    name: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
    company: Company;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    Owner: User;

    @Prop()
    days: number[];

    @Prop()
    service: ServiceDetailsDTO[];

    @Prop()
    session: number;
}


export const PlannerSchema = SchemaFactory.createForClass(Planner)