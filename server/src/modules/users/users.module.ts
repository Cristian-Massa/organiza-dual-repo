import { Module } from '@nestjs/common';
import { UsersController } from '@/modules/users/controller/users.controller';
import { UsersService } from '@/modules/users/service/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@/modules/users/schema/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
