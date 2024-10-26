import { JwtTokenUtil } from '@/common/utils/jwtToken.util';
import { UsersService } from '@/modules/users/service/users.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AdminCheckGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const { session } = request.cookies;
    if (!session) {
      throw new HttpException(
        'Debes iniciar secion para realizar esta accion',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const decrypted = JwtTokenUtil.verifyToken(session);
    if (decrypted.exp! > Date.now() / 1000) {
      const isAdmin = await this.usersService.userModel.findById(
        decrypted.data,
      );
      if (!isAdmin?.isAdmin) {
        throw new HttpException(
          'Necesitas ser administrador para realizar esta accion',
          HttpStatus.UNAUTHORIZED,
        );
      }

      return true;
    }
    return false;
  }
}
