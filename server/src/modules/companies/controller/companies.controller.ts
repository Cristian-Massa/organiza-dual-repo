import { AuthCheckGuard } from '@/modules/auth/guard/authCheck.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CompaniesService } from '@/modules/companies/service/companies.service';
import { CompanyCreateDto } from '@/modules/companies/dto/companyCreate.dto';
import { CompanyDeleteDto } from '@/modules/companies/dto/companyDelete.dto';
import { PAGINATE_LIMIT } from '@/modules/companies/constant/companies.constants';
// import { CompanyQRDto } from '@/modules/companies/dto/companyQR.dto';
import { CompanyUpdateDto } from '@/modules/companies/dto/companyUpdate.dto';
import { CompanyAddEmployeeDto } from '../dto/companyAddEmployee.dto';
import { CompanyGetEmployeesDto } from '../dto/companyGetEmployees.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}
  @UseGuards(AuthCheckGuard)
  @Post('create')
  async create(@Res() res: Response, @Body() body: CompanyCreateDto) {
    try {
      const company = await this.companiesService.create(body);
      return res.status(company.status).json(company.message);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  @UseGuards(AuthCheckGuard)
  @Delete('delete')
  async delete(@Res() res: Response, @Body() body: CompanyDeleteDto) {
    try {
      const deletedCompany = await this.companiesService.delete(body.idOwner);
      return res.status(deletedCompany.status).json(deletedCompany.message);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  @Get('get')
  async get(@Res() res: Response, @Query('id') id: string) {
    try {
      const getCompany = await this.companiesService.get(id);
      return res.status(getCompany.status).json(getCompany.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  @Get('getAll')
  async getAll(@Res() res: Response, @Query('paginate') paginate: number) {
    try {
      const getAllCompanies = await this.companiesService.getAll(
        paginate,
        PAGINATE_LIMIT,
      );
      return res.status(getAllCompanies.status).json(getAllCompanies.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // @UseGuards(AuthCheckGuard)
  // @Post('generateQR')
  // async generateQR(@Res() res: Response, @Body() body: CompanyQRDto) {
  //   try {
  //     const generatedQR = await this.companiesService.generateQR(body);
  //     return res.status(generatedQR.status).json(generatedQR.message);
  //   } catch (error) {
  //     res.status(500).json(error.message);
  //   }
  // }

  @UseGuards(AuthCheckGuard)
  @Put('update')
  async update(@Res() res: Response, @Body() body: CompanyUpdateDto) {
    try {
      const updatedCompany = await this.companiesService.update(body);
      return res.status(updatedCompany.status).json(updatedCompany.message);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  @UseGuards(AuthCheckGuard)
  @Post('addEmployee')
  async addEmployee(@Res() res: Response, @Body() body: CompanyAddEmployeeDto) {
    try {
      const addedEmployee = await this.companiesService.addEmployee(body);
      return res.status(addedEmployee.status).json(addedEmployee.message);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  @UseGuards(AuthCheckGuard)
  @Get('getEmployees')
  async getEmployees(
    @Res() res: Response,
    @Body() body: CompanyGetEmployeesDto,
  ) {
    try {
      const addedEmployee = await this.companiesService.getEmployees(body);
      return res.status(addedEmployee.status).json(addedEmployee.data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
