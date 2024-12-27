import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controller/auth.controller';
import { AuthCheckGuard } from './guard/authCheck.guard';
import { AuthService } from './service/auth.service';
@Module({
  imports: [UsersModule],
  providers: [AuthService, AuthCheckGuard],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
