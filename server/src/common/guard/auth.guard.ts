import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { RESPONSES_COMMON } from '../constants/response.constant';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken'
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();

    if(!req.cookies['session']){
      throw new UnauthorizedException(RESPONSES_COMMON.NOT_FOUND_USER);
    }
    jwt.verify(req.cookies['session'], process.env.SECRET_JWT, function(err: Error, decoded: unknown){
      if(err) throw new UnauthorizedException(RESPONSES_COMMON.NOT_FOUND_USER)
      return true
    })
    throw new UnauthorizedException(RESPONSES_COMMON.INTERNAL_SERVER_ERROR)
  }
}
