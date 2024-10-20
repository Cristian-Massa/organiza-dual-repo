import { Injectable } from '@nestjs/common';
import { AuthStrategy } from '@/modules/auth/interface/strategy.interface';
import { PhoneAuthStrategy } from '@/modules/auth/strategy/phone.strategy';
import { EmailAuthStrategy } from '../strategy/email.strategy';
import { compareSync, hashSync, genSaltSync } from 'bcrypt';
import { UsersService } from '@/modules/users/service/users.service';
import { Response } from 'express';
import { JwtTokenUtil } from '@/common/utils/jwtToken.util';
@Injectable()
export class AuthService {
  strategy: AuthStrategy;
  constructor(readonly usersService: UsersService) {}
  getStrategy(strategy: string) {
    switch (strategy) {
      case 'phone':
        return (this.strategy = new PhoneAuthStrategy(this, this.usersService));

      case 'email':
        return (this.strategy = new EmailAuthStrategy(this, this.usersService));
      default:
        throw new Error('Estrategia no encontrada.');
    }
  }

  encryptPassword(password: string): string {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  }

  decryptPassword(password: string, hash: string): boolean {
    const check = compareSync(password, hash);
    return check;
  }

  generateCookie(res: Response, data: string) {
    const token = JwtTokenUtil.generateToken(data);

    res.cookie('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' ? true : false,
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    });
  }
}
