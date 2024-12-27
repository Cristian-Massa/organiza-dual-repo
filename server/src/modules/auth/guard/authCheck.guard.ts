import { HTTP_RESULT_MESSAGES } from '@/common/constants/HTTP_RESULT_MESSAGES';
import { JwtTokenUtil } from '@/common/utils/jwtToken.util';
import { UsersService } from '@/modules/users/service/users.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AuthCheckGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { session } = request.cookies;
    if (!session) {
      throw new HttpException(
        HTTP_RESULT_MESSAGES.auth.failure.need_login,
        HttpStatus.UNAUTHORIZED,
      );
    }
    const decrypted = JwtTokenUtil.verifyToken(session);
    if (decrypted.exp! < Date.now() / 1000) {
      throw new HttpException(
        HTTP_RESULT_MESSAGES.auth.failure.expired_session,
        HttpStatus.UNAUTHORIZED,
      );
    }
    const user = await this.usersService.userModel.findById(decrypted.id);

    if (!user) {
      throw new HttpException(
        HTTP_RESULT_MESSAGES.user.failure.not_found,
        HttpStatus.UNAUTHORIZED,
      );
    }

    return true;
  }
}
