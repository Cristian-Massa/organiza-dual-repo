import { UsersService } from '@/modules/users/service/users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  constructor(private readonly usersService: UsersService) {}

  async handleBan(id: string) {
    await this.usersService.userModel.findByIdAndUpdate(id, {
      isBanned: true,
    });
    if (!id)
      throw new HttpException(
        'No se encontro el usuario',
        HttpStatus.NOT_FOUND,
      );

    return {
      status: HttpStatus.OK,
      message: 'Usuario baneado',
    };
  }
}
