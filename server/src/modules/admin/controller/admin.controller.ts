import { Body, Controller } from '@nestjs/common';
import { AdminService } from '../service/admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  async handleBan(@Body() id: string) {
    return await this.adminService.handleBan(id);
  }
}
