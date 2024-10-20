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
        'Debes iniciar sesion para realizar esta accion',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const decrypted = JwtTokenUtil.verifyToken(session);
    if (decrypted.exp! < Date.now() / 1000) {
      throw new HttpException('Tu sesion ha expirado', HttpStatus.UNAUTHORIZED);
    }

    const user = await this.usersService.userModel.findById(decrypted.data);
    if (!user) {
      throw new HttpException(
        'No se pudo encontrar el usuario',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return true;
  }
}
