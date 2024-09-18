import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './schema/company.schema';
import { CompaniesController } from './controller/companies.controller';
import { CompaniesService } from './service/companies.service';
@Module({
    imports: [MongooseModule.forFeature([{
        name: Company.name, schema: CompanySchema
    }])],
    controllers: [CompaniesController],
    providers: [CompaniesService]
})
export class CompaniesModule {}
