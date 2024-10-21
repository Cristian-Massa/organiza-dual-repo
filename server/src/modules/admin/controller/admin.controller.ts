import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from '../service/admin.service';
import { AdminCheckGuard } from '../guard/adminCheck.guard';
import { Response } from 'express';
@UseGuards(AdminCheckGuard)
@Controller('users/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('ban')
  async handleBan(@Body() id: string, @Res() res: Response) {
    try {
      const banUser = await this.adminService.handleBan(id);
      res.status(banUser.status).json(banUser.message);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }
}
