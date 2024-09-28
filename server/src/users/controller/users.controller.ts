import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Response } from 'express';
import { UsersService } from '../service/users.service';
import { UserCreateDTO } from '../dto/create.dto';
import { UserLoginDTO } from '../dto/login.dto';
import { UserBanDTO } from '../dto/ban.dto';
import { UserDeleteDTO } from '../dto/delete.dto';
import { UserGetDTO } from '../dto/get.dto';
import { UserModifyDTO } from '../dto/modify.dto';
import { UserGetAllDTO } from '../dto/getAll.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/register')
  async create(@Res() response: Response, @Body() body: UserCreateDTO) {
    const res = await this.userService.create(body);
    if (res.status === HttpStatus.CREATED) {
      const hash = jwt.sign(
        {
          id: res.payload,
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
          id: res.payload,
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

  @Delete('/delete')
  async delete(@Res() response: Response, @Query() query: UserDeleteDTO) {
    const res = await this.userService.delete(query);
    return response.status(res.status).json({ response: res.response });
  }

  @Get('/get')
  async get(@Res() response: Response, @Body() body: UserGetDTO) {
    const res = await this.userService.get(body);
    return response.status(res.status).json({ response: res.response });
  }

  @Get('/getAll')
  async getAll(@Res() response: Response, @Body() body: UserGetAllDTO) {
    const res = await this.userService.getAll(body);
    return response.status(res.status).json({ response: res.response });
  }

  @Put('/modify')
  async modify(
    @Res() response: Response,
    @Query() query: string,
    @Body() body: UserModifyDTO,
  ) {
    const res = await this.userService.modify(body);
    return response.status(res.status).json({ response: res.response });
  }
}
