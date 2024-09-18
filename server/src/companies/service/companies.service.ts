import { Inject, Injectable } from '@nestjs/common';
import { Company } from '../schema/company.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CompaniesService {
    constructor(
        @InjectModel(Company.name)
        private companyModel: Model<Company>
    ){}

    async create(): Promise<void>{
        const company = this.companyModel.find()
        
    }
}
