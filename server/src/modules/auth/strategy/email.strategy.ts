import { HttpStatus, NotFoundException } from '@nestjs/common';
import { AuthBodyDTO } from '@/modules/auth/dto/AuthBody.dto';
import { AuthStrategy } from '@/modules/auth/interface/strategy.interface';
import { UsersService } from '@/modules/users/service/users.service';
import { RegisterBodyDto } from '../dto/RegisterBody.dto';
import { AuthService } from '../service/auth.service';

export class EmailAuthStrategy implements AuthStrategy {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}
  async login({ email, password }: Omit<AuthBodyDTO, 'strategy' | 'phone'>) {
    const user = await this.usersService.userModel.findOne({
      email: email,
    });

    if (!user) throw new NotFoundException('No se encontro el usuario.');
    const checkPassword = this.authService.decryptPassword(
      password,
      user.password,
    );
    if (!checkPassword) {
      throw new NotFoundException('Contraseña incorrecta');
    }
    return {
      status: HttpStatus.OK,
      message: 'Login exitoso',
      data: user._id,
    };
  }

  async register(userData: Omit<RegisterBodyDto, 'strategy'>) {
    const hash = this.authService.encryptPassword(userData.password);
    const user = await this.usersService.userModel.create({
      ...userData,
      password: hash,
    });
    // TODO: Crear un archivo json para las respuestas y excepciones.
    if (!user) throw new NotFoundException('No se pudo registrar el usuario');
    return {
      status: HttpStatus.OK,
      message: 'Registro exitoso',
      data: user._id,
    };
  }
}
