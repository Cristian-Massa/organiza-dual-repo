import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthBodyDTO } from '../dto/AuthBody.dto';
import { Response } from 'express';
import { RegisterBodyDto } from '../dto/RegisterBody.dto';
@Controller('/users/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: AuthBodyDTO, @Res() res: Response) {
    try {
      const strategy = this.authService.getStrategy(body.strategy);
      const user = await strategy.login(body);
      this.authService.generateCookie(res, user.data.toString());
      return res.status(user.status).json(user.message);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

  @Post('/register')
  async register(@Body() body: RegisterBodyDto, @Res() res: Response) {
    try {
      const strategy = this.authService.getStrategy(body.strategy);
      const user = await strategy.register(body);

      this.authService.generateCookie(res, user.data.toString());
      return res.status(user.status).json(user.message);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }
}
