import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'
import { Request, Response } from 'express';

@Injectable()
export class AuthCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const session = req.headers.cookie.split('=').at(-1);
    if(!session) return res.status(HttpStatus.UNAUTHORIZED).json({error: "Necesitas iniciar sesion."})
    
    const decoded = jwt.verify(session, process.env.SECRET_JWT, function(err, decoded) {
      if(err) return res.status(HttpStatus.UNAUTHORIZED).json({error: "Se termino la sesion."})
      next();
      
    })
    
  }
}
