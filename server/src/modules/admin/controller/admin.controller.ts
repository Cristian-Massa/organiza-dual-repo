import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AdminService } from '../service/admin.service';
import { AdminCheckGuard } from '../guard/adminCheck.guard';
@UseGuards(AdminCheckGuard)
@Controller('users/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('ban')
  async handleBan(@Body() id: string) {
    return await this.adminService.handleBan(id);
  }
}
