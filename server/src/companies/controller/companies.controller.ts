import { Controller, Get, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { CompaniesService } from '../service/companies.service';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('companies')
export class CompaniesController {
    constructor(private readonly service: CompaniesService){};
    @Post('create')
    async create(@Req() req: Request, @Res() response: Response) {
        const res = await this.service.create(req.body);
        return response.status(res.status).json(res.response);
    };

    @Get('get')
    async get(@Req() req: Request, @Res() response: Response) {
        const res = await this.service.get(req.body);
        return response.status(res.status).json(res.response);
    };

    @UseGuards(new AuthGuard())
    @Get('get-all')
    async getAll(@Req() req: Request, @Res() response: Response) {
        const res = await this.service.getAll();
        return response.status(res.status).json(res.response);
    };

    @Put('modify')
    async modify(@Req() req: Request, @Res() response: Response) {
        const res = await this.service.modify(req.body);
        return response.status(res.status).json(res.response);
    };
};
