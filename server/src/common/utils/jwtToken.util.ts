import * as jwt from 'jsonwebtoken';

export class JwtTokenUtil {
  static generateToken(payload: string) {
    const token = jwt.sign({ data: payload }, process.env.JWT_SECRET!, {
      expiresIn: '7d',
    });
    return token;
  }

  static verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET!);
  }
}
