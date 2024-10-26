import { Company } from '@/modules/companies/schema/companies.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyCreateDto } from '@/modules/companies/dto/companyCreate.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CompanyUpdateDto } from '@/modules/companies/dto/companyUpdate.dto';
import { CompanyAddEmployeeDto } from '../dto/companyAddEmployee.dto';
import { UsersService } from '@/modules/users/service/users.service';
import { CompanyGetEmployeesDto } from '../dto/companyGetEmployees.dto';
@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<Company>,
    private readonly userService: UsersService,
  ) {}
  async create(info: CompanyCreateDto) {
    const company = await this.companyModel.create(info);
    if (!company) {
      throw new HttpException(
        'No se pudo crear la empresa',
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      status: HttpStatus.CREATED,
      message: 'Empresa creada',
    };
  }

  async delete(id: string) {
    const company = await this.companyModel.findByIdAndDelete(id);
    if (!company) {
      throw new HttpException(
        'No se pudo encontrar la empresa',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      status: HttpStatus.OK,
      message: 'Empresa eliminada',
    };
  }

  async get(id: string) {
    const company = await this.companyModel.findById(id);
    if (!company) {
      throw new HttpException(
        'No se pudo encontrar la empresa',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      status: HttpStatus.OK,
      message: 'Empresa encontrada',
      data: company,
    };
  }

  async getAll(paginate: number, limit: number) {
    const companies = await this.companyModel
      .find()
      .skip(paginate)
      .limit(limit);
    if (!companies) {
      throw new HttpException(
        'No se pudo encontrar la empresa',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      status: HttpStatus.OK,
      message: 'Empresas encontradas',
      data: companies,
    };
  }

  async update(info: CompanyUpdateDto) {
    const company = await this.companyModel.findByIdAndUpdate(info.id, info);
    if (!company) {
      throw new HttpException(
        'No se pudo actualizar la empresa',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      status: HttpStatus.OK,
      message: 'Empresa actualizada con exito',
    };
  }

  async addEmployee(info: CompanyAddEmployeeDto) {
    const company = this.companyModel;

    const employeeExist = await company.findOne({ _id: info.id });
    if (employeeExist && !employeeExist?.employees.includes(info.employee)) {
      await company.updateOne(
        { _id: info.id },
        {
          $addToSet: {
            employees: info.employee,
          },
        },
      );
      return {
        status: HttpStatus.OK,
        message: 'Empleado agregado',
      };
    }

    if (!company) {
      throw new HttpException(
        'No se pudo encontrar la empresa',
        HttpStatus.NOT_FOUND,
      );
    }
    throw new HttpException(
      'Ya existe el empleado en la empresa',
      HttpStatus.NOT_FOUND,
    );
  }

  async getEmployees({ employees }: CompanyGetEmployeesDto) {
    const userModel = this.userService.userModel;
    const employeesFounded = await userModel.find({
      _id: { $in: employees },
    });

    if (!employees) {
      throw new HttpException(
        'No se pudo encontrar los empleados',
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      status: HttpStatus.OK,
      data: employeesFounded,
    };
  }
}
