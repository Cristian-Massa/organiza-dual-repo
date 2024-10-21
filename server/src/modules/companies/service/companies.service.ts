import { Company } from '@/modules/companies/schema/companies.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyCreateDto } from '@/modules/companies/dto/companyCreate.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CompanyUpdateDto } from '@/modules/companies/dto/companyUpdate.dto';
import { CompanyQRDto } from '@/modules/companies/dto/companyQR.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<Company>,
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
      throw new HttpException('No se pudo encontrar la empresa', 404);
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
  // TODO: Generar QR
  async generateQR(id: CompanyQRDto) {
    console.log(id);

    return {
      status: HttpStatus.OK,
      message: 'QR generada',
    };
  }

  async update(info: CompanyUpdateDto) {
    const company = await this.companyModel.findByIdAndUpdate(info.id);
    if (!company) {
      throw new HttpException('No se pudo encontrar la empresa', 404);
    }
    return {
      status: HttpStatus.OK,
      message: 'Empresa actualizada',
    };
  }
}
