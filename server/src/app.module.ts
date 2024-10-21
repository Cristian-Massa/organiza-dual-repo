import { Module } from '@nestjs/common';
import { AuthModule } from '@/modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './modules/admin/admin.module';
import { CompaniesModule } from './modules/companies/companies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AdminModule,
    CompaniesModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
