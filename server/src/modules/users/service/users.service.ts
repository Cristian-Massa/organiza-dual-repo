import { HTTP_RESULT_MESSAGES } from '@/common/constants/HTTP_RESULT_MESSAGES';
import { GetMyProfileDTO } from '@/modules/users/DTO/GetMyProfileDTO';
import { User } from '@/modules/users/schema/users.schema';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    readonly userModel: Model<User>,
  ) {}

  async getMyProfile(id: GetMyProfileDTO) {
    try {
      console.log(id);
      const user = await this.userModel.findById(id, {
        password: 0,
      });

      if (!user) {
        throw new HttpException(
          HTTP_RESULT_MESSAGES.user.failure.not_found,
          404,
        );
      }
      return {
        status: HttpStatus.FOUND,
        data: user,
      };
    } catch (error) {
      console.log(error);
    }

    throw new HttpException(
      HTTP_RESULT_MESSAGES.common.failure.general_error,
      500,
    );
  }
}
