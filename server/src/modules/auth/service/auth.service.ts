import { HTTP_RESULT_MESSAGES } from '@/common/constants/HTTP_RESULT_MESSAGES';
import { UserCookieDTO } from '@/common/DTO/UserCookie.dto';
import { JwtTokenUtil } from '@/common/utils/jwtToken.util';
import { AuthBodyDTO } from '@/modules/auth/dto/AuthBody.dto';
import { RegisterBodyDTO } from '@/modules/auth/dto/RegisterBody.dto';
import { AuthStrategy } from '@/modules/auth/interface/strategy.interface';
import { UsersService } from '@/modules/users/service/users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { Response } from 'express';
@Injectable()
export class AuthService {
  strategy: AuthStrategy;
  constructor(readonly usersService: UsersService) {}

  async login(body: AuthBodyDTO) {
    const userOperation = this.usersService.userModel;

    const user = await userOperation.findOne({
      email: body.email,
    });
    if (!user)
      throw new HttpException(
        HTTP_RESULT_MESSAGES.auth.failure.user_not_found,
        404,
      );
    console.log(body.password);
    const checkPassword = this.comparePassword(body.password, user?.password!);

    if (!checkPassword)
      throw new HttpException(
        HTTP_RESULT_MESSAGES.auth.failure.bad_password,
        400,
      );
    const userToSend = {
      id: user._id,
      username: user.username,
    };
    return {
      status: HttpStatus.ACCEPTED,
      data: userToSend,
      message: HTTP_RESULT_MESSAGES.auth.success.user_loged_in,
    };
  }

  async register(body: RegisterBodyDTO) {
    const userOperation = this.usersService.userModel;
    console.log(body);

    try {
      const result = await userOperation.create({
        ...body,
        password: this.encryptPassword(body.password),
      });
      const resultToSend = {
        id: result._id,
        username: result.username,
      };
      return {
        status: HttpStatus.CREATED,
        data: resultToSend,
        message: HTTP_RESULT_MESSAGES.auth.success.user_created,
      };
    } catch (error) {
      if (error.code === 11000) {
        const duplicatedValues = Object.keys(error.keyValue)
          .map((element) => element)
          .join(', ');

        throw new HttpException(
          {
            message: `${HTTP_RESULT_MESSAGES.auth.failure.duplicated_inputs} ${duplicatedValues}`,
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          HTTP_RESULT_MESSAGES.common.failure.general_error,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  logout(res: Response) {
    res.clearCookie('session');
  }

  private encryptPassword(password: string): string {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  }

  private comparePassword(password: string, hash: string): boolean {
    const check = compareSync(password, hash);
    return check;
  }

  generateCookie(res: Response, data: UserCookieDTO) {
    console.log(data);

    const token = JwtTokenUtil.generateToken(data);

    res.cookie('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' ? true : false,
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    });
  }
}
