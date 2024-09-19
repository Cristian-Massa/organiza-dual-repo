import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CommonController } from './common/controller/common.controller';
import { CommonService } from './common/service/common.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CompaniesModule } from './companies/companies.module';
import { Country, CountrySchema } from './common/schema/country.schema';
import { ConfigModule } from '@nestjs/config';
import { PlannersModule } from './planners/planners.module';
import { AuthCheckMiddleware } from './common/middleware/authCheck.middleware';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/'),
    CompaniesModule,
    MongooseModule.forFeature([
      {
        name: Country.name,
        schema: CountrySchema,
      },
    ]),
    PlannersModule,
  ],
  controllers: [CommonController],
  providers: [CommonService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthCheckMiddleware)
      .exclude('/users/login')
      .exclude('/users/register')
      .exclude('/company/getAll')
      .exclude('/company/get')
      .forRoutes('*')
  }
}
