import { Module } from '@nestjs/common';
import { AdminController } from './controller/admin.controller';
import { AdminService } from './service/admin.service';
import { UsersModule } from '../users/users.module';
import { AdminCheckGuard } from './guard/adminCheck.guard';

@Module({
  imports: [UsersModule],
  controllers: [AdminController],
  providers: [AdminService, AdminCheckGuard],
})
export class AdminModule {}
