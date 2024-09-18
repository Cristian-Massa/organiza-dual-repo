import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CompaniesService } from '../service/companies.service';

@Controller('companies')
export class CompaniesController {
    constructor(private readonly service: CompaniesService){}
    @Post(`/create`)
    create(@Req() req: Request){
        this.service.create()
    }
}
