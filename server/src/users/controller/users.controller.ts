import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Response, Request } from 'express';
import { UsersService } from '../service/users.service';
import { UserCreateDTO } from '../dto/create.dto';
import { UserLoginDTO } from '../dto/login.dto';
import { UserBanDTO } from '../dto/ban.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/regisster')
  async create(@Res() response: Response, @Body() body: UserCreateDTO) {
    const res = await this.userService.create(body);
    if (res.status === HttpStatus.CREATED) {
      const hash = jwt.sign(
        {
          email: body.email,
        },
        process.env.SECRET_JWT,
        {
          expiresIn: '7d',
        },
      );
      response.cookie('session', hash, {
        secure: true,
        httpOnly: true,
      });
    }
    return response.status(res.status).json({ response: res.response });
  }

  @Post('/login')
  async login(@Res() response: Response, @Body() body: UserLoginDTO) {
    const res = await this.userService.login(body);
    if (res.status === HttpStatus.CREATED) {
      const hash = jwt.sign(
        {
          email: body.email,
        },
        process.env.SECRET_JWT,
        {
          expiresIn: '7d',
        },
      );
      response.cookie('session', hash, {
        secure: true,
        httpOnly: true,
      });
    }
    return response.status(res.status).json({ response: res.response });
  }

  @Post('/ban')
  async ban(@Res() response: Response, @Query() query: UserBanDTO) {
    const res = await this.userService.ban(query);
    return response.status(res.status).json({ response: res.response });
  }
}
