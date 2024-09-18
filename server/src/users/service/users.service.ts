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
import { response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async create(info: UserCreateDTO) {
    try {
      
      if (
        !info.address ||
        !info.city ||
        !info.country ||
        !info.email ||
        !info.password ||
        !info.name
      ) {
        return {status: HttpStatus.BAD_REQUEST, response: "Falta informacion."}
      }
      const newUser = await this.userModel.create(info)


      if(newUser){
          return {status: HttpStatus.CREATED, response: newUser}
      } 
      return {status: HttpStatus.NOT_MODIFIED, response: "No se creo el usuario."}
    } catch (error) {
        console.error({
            title: (error as Error).name,
            message: (error as Error).message
        })
        return {status: HttpStatus.INTERNAL_SERVER_ERROR, response: (error as Error).name}
    }
  }

  async ban(info: UserBanDTO) {
    try {
      const {id, isTemp, expire} = info


      const banTemplate: Banned = {
        isBanned: true,
        isTemp: isTemp,
        until: expire
      }

      const result = await this.userModel.findOneAndUpdate({
        _id: id
      }, {
        banned: banTemplate
      }) 

      if(result) return {status: HttpStatus.ACCEPTED, response: `El usuario de id: ${id} fue baneado el dia y hora: ${new Date().toISOString()}, ${isTemp ? 'hasta: ' + expire : null}`}

      if(!result) return {status: HttpStatus.NOT_MODIFIED, response: `No se pudo encontrar el usuario a banear.`}
      return {status: HttpStatus.NOT_FOUND, response: "No se pudo banear el usuario."}
    } catch (error) {
        console.error({
            title: (error as Error).name,
            message: (error as Error).message
        })
        return {status: HttpStatus.INTERNAL_SERVER_ERROR, response: (error as Error).name}
    }
  }

  async login(info: UserLoginDTO) {
    try {
      
      if (
        (!info.email || !info.phone) &&
        !info.password
        
      ) {
        return {status: HttpStatus.BAD_REQUEST, response: "Falta informacion."}
      }
      const getUser = await this.userModel.findOne({
        email: info.email,
        password: info.password
      })


      if(getUser){
          return {status: HttpStatus.CREATED, response: getUser}
      } 
      return {status: HttpStatus.NOT_FOUND, response: "No se encontro el usuario."}
    } catch (error) {
        console.error({
            title: (error as Error).name,
            message: (error as Error).message
        })
        return {status: HttpStatus.INTERNAL_SERVER_ERROR, response: (error as Error).name}
    }
  }

  async delete(info: UserDeleteDTO) {}

  async get(info: UserGetDTO) {}

  async getAll(info: UserGetAllDTO) {}
}
