import { JwtTokenUtil } from '@/common/utils/jwtToken.util';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';

export class AdminCheckGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const cookies = request.cookies;
    if (!cookies) console.log(cookies);

    throw new HttpException(
      'Debes iniciar secion para realizar esta accion',
      HttpStatus.UNAUTHORIZED,
    );
    const decrypted = JwtTokenUtil.verifyToken(cookies);
    return false;
  }
}
