import { HTTP_RESULT_MESSAGES } from '@/common/constants/HTTP_RESULT_MESSAGES';
import { UserCookieDTO } from '@/common/DTO/UserCookie.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export class JwtTokenUtil {
  static generateToken(payload: UserCookieDTO) {
    console.log(process.env.JWT_SECRET);

    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: '7d',
    });
    return token;
  }

  static verifyToken(token: string): jwt.JwtPayload {
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!,
      ) as jwt.JwtPayload;
      return decoded;
    } catch (err) {
      throw new HttpException(
        HTTP_RESULT_MESSAGES.user.failure.token_expired,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
