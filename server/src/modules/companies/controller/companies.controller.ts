import { AuthCheckGuard } from '@/modules/auth/guard/authCheck.guard';
import { Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';

@Controller('companies')
export class CompaniesController {
  constructor() {}
  @UseGuards(AuthCheckGuard)
  @Post('create')
  async create() {}

  @UseGuards(AuthCheckGuard)
  @Delete('delete')
  async delete() {}

  @Get('get')
  async get() {}

  @Get('getAll')
  async getAll() {}

  @UseGuards(AuthCheckGuard)
  @Post('generateQR')
  async generateQR() {}

  @UseGuards(AuthCheckGuard)
  @Put('update')
  async update() {}
}
