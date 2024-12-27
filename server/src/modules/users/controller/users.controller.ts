import { JwtTokenUtil } from '@/common/utils/jwtToken.util';
import { AuthCheckGuard } from '@/modules/auth/guard/authCheck.guard';
import { UsersService } from '@/modules/users/service/users.service';
import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('getMyProfile')
  @UseGuards(AuthCheckGuard)
  async getMyProfile(@Req() req: Request, @Res() res: Response) {
    const cookies = req.cookies;
    const cookie = cookies['session'];
    const data = JwtTokenUtil.verifyToken(cookie);
    const user = await this.usersService.getMyProfile(data.id);

    res.status(user.status).json(user.data);
  }
}
