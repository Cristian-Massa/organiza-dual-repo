import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthCheckMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const cookie = req.cookies;
    console.log(cookie);
    
    next();
  }
}
