import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Company,
  CompanySchema,
} from '@/modules/companies/schema/companies.schema';
import { CompaniesController } from '@/modules/companies/controller/companies.controller';
import { CompaniesService } from '@/modules/companies/service/companies.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Company.name,
        schema: CompanySchema,
      },
    ]),
  ],
  controllers: [],
  providers: [CompaniesController, CompaniesService],
  exports: [],
})
export class CompaniesModule {}
