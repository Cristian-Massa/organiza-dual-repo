import { AuthCheckGuard } from '@/modules/auth/guard/authCheck.guard';
import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthBodyDTO } from '../dto/AuthBody.dto';
import { RegisterBodyDTO } from '../dto/RegisterBody.dto';
import { AuthService } from '../service/auth.service';
@Controller('/users/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: AuthBodyDTO, @Res() res: Response) {
    try {
      const user = await this.authService.login(body);
      this.authService.generateCookie(res, user.data);
      return res
        .status(user.status)
        .json({ data: user.data, message: user.message });
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }

  @Post('/register')
  async register(@Body() body: RegisterBodyDTO, @Res() res: Response) {
    try {
      const user = await this.authService.register(body);

      this.authService.generateCookie(res, user.data);
      return res
        .status(user.status)
        .json({ data: user.data, message: user.message });
    } catch (error) {
      return res.status(error.status).json(error.message);
    }
  }
  @UseGuards(AuthCheckGuard)
  @Post('/logout')
  async logout(@Res() res: Response) {
    try {
      this.authService.logout(res);
      return res.status(HttpStatus.ACCEPTED).json({ message: 'Adios!' });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }
}
