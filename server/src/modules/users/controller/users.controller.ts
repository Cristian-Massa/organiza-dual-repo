import { Controller } from '@nestjs/common';
import { UsersService } from '@/modules/users/service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // async findAll() {
  //   return await this.usersService.findAll();
  // }

  // async findOne(id: string) {
  //   return await this.usersService.findOne(id);
  // }

  // async update(id: string, body: any) {
  //   return await this.usersService.update(id, body);
  // }

  // async remove(id: string) {
  //   return await this.usersService.remove(id);
  // }
}
