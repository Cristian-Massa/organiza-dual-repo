import { UsersService } from '@/modules/users/service/users.service';
import { HttpStatus, NotFoundException } from '@nestjs/common';
import { AuthStrategy } from '@/modules/auth/interface/strategy.interface';
import { AuthBodyDTO } from '@/modules/auth/dto/AuthBody.dto';
import { RegisterBodyDto } from '../dto/RegisterBody.dto';
import { AuthService } from '../service/auth.service';

export class PhoneAuthStrategy implements AuthStrategy {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  async login({ phone, password }: Omit<AuthBodyDTO, 'strategy' | 'email'>) {
    const user = await this.usersService.userModel.findOne({
      phone: phone,
    });

    // TODO: Crear un archivo json para las respuestas y excepciones.
    if (!user) throw new NotFoundException('No se encontro el usuario');
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
    try {
      const user = await this.usersService.userModel.create({
        ...userData,
        password: this.authService.encryptPassword(userData.password),
      });
      // TODO: Crear un archivo json para las respuestas y excepciones.
      if (!user) throw new NotFoundException('No se pudo crear el usuario');
      return {
        status: HttpStatus.OK,
        message: 'Registro exitoso',
        data: user._id,
      };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
