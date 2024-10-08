import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schema/user.schema';
import { Model } from 'mongoose';
import { UserCreateDTO } from '../dto/create.dto';
import { UserBanDTO } from '../dto/ban.dto';
import { UserLoginDTO } from '../dto/login.dto';
import { UserDeleteDTO } from '../dto/delete.dto';
import { UserGetDTO } from '../dto/get.dto';
import { UserGetAllDTO } from '../dto/getAll.dto';
import { Banned } from '../interface/Banned.interface';
import { UserModifyDTO } from '../dto/modify.dto';
import {
  Response,
  TextResponse,
} from '../../common/interface/response.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async create(info: UserCreateDTO): Promise<Response<TextResponse>> {
    try {
      if (
        !info.address ||
        !info.city ||
        !info.country ||
        !info.email ||
        !info.password ||
        !info.name
      ) {
        return {
          status: HttpStatus.BAD_REQUEST,
          response: { error: 'Falta informacion.' },
        };
      }
      const newUser = await this.userModel.create(info);

      if (newUser) {
        return {
          status: HttpStatus.CREATED,
          response: {
            success: 'Se ha creado el usuario.',
          },
          payload: newUser._id,
        };
      }
      return {
        status: HttpStatus.NOT_MODIFIED,
        response: {
          error: 'No se ha podido crear el usuario.',
        },
      };
    } catch (error) {
      console.error({
        title: (error as Error).name,
        message: (error as Error).message,
      });
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        response: {
          error: (error as Error).name,
        },
      };
    }
  }

  async ban(info: UserBanDTO) {
    if (!info.id)
      return {
        status: HttpStatus.BAD_REQUEST,
        response: 'Falta el id del usuario a banear.',
      };
    try {
      const { id, isTemp, expire } = info;

      const banTemplate: Banned = {
        isBanned: true,
        isTemp: isTemp,
        until: expire,
      };

      const result = await this.userModel.findOneAndUpdate(
        {
          _id: id,
        },
        {
          banned: banTemplate,
        },
      );

      if (result)
        return {
          status: HttpStatus.ACCEPTED,
          response: `El usuario de id: ${id} fue baneado el dia y hora: ${new Date().toISOString()}, ${isTemp ? 'hasta: ' + expire : null}`,
        };

      if (!result)
        return {
          status: HttpStatus.NOT_MODIFIED,
          response: `No se pudo encontrar el usuario a banear.`,
        };
      return {
        status: HttpStatus.NOT_FOUND,
        response: 'No se pudo banear el usuario.',
      };
    } catch (error) {
      console.error({
        title: (error as Error).name,
        message: (error as Error).message,
      });
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        response: (error as Error).name,
      };
    }
  }

  async login(info: UserLoginDTO): Promise<Response<string>> {
    if ((!info.email || !info.phone) && !info.password) {
      return { status: HttpStatus.BAD_REQUEST, response: 'Falta informacion.' };
    }
    try {
      const getUser = await this.userModel.findOne({
        email: info.email,
        password: info.password,
      });

      if (getUser) {
        return {
          status: HttpStatus.CREATED,
          response: 'Bienvenido.',
          payload: getUser._id,
        };
      }
      return {
        status: HttpStatus.NOT_FOUND,
        response: 'No se encontro el usuario.',
      };
    } catch (error) {
      console.error({
        title: (error as Error).name,
        message: (error as Error).message,
      });
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        response: (error as Error).name,
      };
    }
  }

  async delete(info: UserDeleteDTO): Promise<Response<TextResponse>> {
    if (!info.id)
      return {
        status: HttpStatus.BAD_REQUEST,
        response: { error: 'Falta el id del usuario.' },
      };
    try {
      const findUser = await this.userModel.findByIdAndDelete(info.id);
      if (!findUser)
        return {
          status: HttpStatus.NOT_FOUND,
          response: {
            error: 'No se encontro el usuario.',
          },
        };
      return {
        status: HttpStatus.ACCEPTED,
        response: { success: `Se borro el usuario de id: ${info.id}` },
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        response: { error: (error as Error).name },
      };
    }
  }
  async get(info: UserGetDTO): Promise<Response<User | TextResponse>> {
    if (!info.id)
      return {
        status: HttpStatus.BAD_REQUEST,
        response: { error: 'Falta el id del usuario.' },
      };
    try {
      const findUser = await this.userModel.findOne(
        {
          _id: info.id,
        },
        {
          password: 0,
        },
      );
      if (!findUser)
        return {
          status: HttpStatus.NOT_FOUND,
          response: { error: 'No se encontro el usuario.' },
        };

      return { status: HttpStatus.ACCEPTED, response: findUser };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        response: { error: (error as Error).name },
      };
    }
  }

  async getAll(info: UserGetAllDTO): Promise<Response<User[] | TextResponse>> {
    try {
      const findUser = await this.userModel
        .find(
          {},
          {
            password: 0,
          },
        )
        .skip((info.page - 1) * 10)
        .limit(10);

      if (!findUser)
        return {
          status: HttpStatus.NOT_FOUND,
          response: { error: 'No se encontraron usuarios.' },
        };

      return { status: HttpStatus.ACCEPTED, response: findUser };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        response: { error: (error as Error).name },
      };
    }
  }

  async modify(info: UserModifyDTO): Promise<Response<TextResponse>> {
    if (!info.id)
      return {
        status: HttpStatus.BAD_REQUEST,
        response: { error: 'Falta el id del usuario.' },
      };
    try {
      const findUser = await this.userModel.findOneAndUpdate(
        {
          _id: info.id,
        },
        info,
      );
      if (!findUser)
        return {
          status: HttpStatus.NOT_FOUND,
          response: { error: 'No se encontro el usuario.' },
        };

      return {
        status: HttpStatus.ACCEPTED,
        response: { success: 'Usuario actualizado' },
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        response: { error: (error as Error).name },
      };
    }
  }
}
