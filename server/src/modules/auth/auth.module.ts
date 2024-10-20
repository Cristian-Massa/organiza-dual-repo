import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { UsersModule } from '../users/users.module';
import { EmailAuthStrategy } from './strategy/email.strategy';
import { PhoneAuthStrategy } from './strategy/phone.strategy';

@Module({
  imports: [UsersModule],
  providers: [AuthService, EmailAuthStrategy, PhoneAuthStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
