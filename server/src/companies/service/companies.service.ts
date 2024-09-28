import {  HttpStatus, Injectable, UseGuards } from '@nestjs/common';
import { Company } from '../schema/company.schema';
import { Document, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Response, TextResponse } from '../../common/interface/response.interface';
import { RESPONSES } from '../constants/responses';
@Injectable()
export class CompaniesService {
    constructor(
        @InjectModel(Company.name)
        private companyModel: Model<Company>
    ){}

    
    async create(info: Company): Promise<Response<Company | TextResponse>> {
        try {
            const createdCompany = await this.companyModel.create(info);
            return { status: HttpStatus.CREATED, response: createdCompany };
        } catch (error) {
            return { status: HttpStatus.INTERNAL_SERVER_ERROR, response: {error: (error as Error).name} };
        };
    };

    async get(info: { id: string }): Promise<Response<Company | TextResponse>> {
        if(!info.id) return{status: HttpStatus.BAD_REQUEST, response: { error: RESPONSES.BAD_REQUEST}};
        try {
            const findCompany = await this.companyModel.findOne(
                {
                    _id: info.id,
                },
            );
            if (!findCompany)
                return {
                    status: HttpStatus.NOT_FOUND,
                    response: { error: RESPONSES.NOT_FOUND}
                };

            return { status: HttpStatus.ACCEPTED, response: findCompany };
        } catch (error) {
            return {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                response: { error: RESPONSES.INTERNAL_SERVER_ERROR},
            };
        }
    }

    async getAll(): Promise<Response<Company[] | TextResponse>> {
        try {
            const findCompany = await this.companyModel.find();
            if (!findCompany)
                return {
                    status: HttpStatus.NOT_FOUND,
                    response: { error: RESPONSES.NOT_FOUND},
                };

            return { status: HttpStatus.ACCEPTED, response: findCompany };
        } catch (error) {
            return {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                response: { error: RESPONSES.INTERNAL_SERVER_ERROR },
            };
        }
    }

    async modify(info: { id: string, data: Company }): Promise<Response<Company | TextResponse>> {
        if(!info.id) return{status: HttpStatus.BAD_REQUEST, response: { error: 'Falta el id de la empresa.'}};
        try {
            const findCompany = await this.companyModel.findOneAndUpdate(
                {
                    _id: info.id,
                },
                info.data,
            );
            if (!findCompany)
                return {
                    status: HttpStatus.NOT_FOUND,
                    response: { error: RESPONSES.NOT_FOUND},
                };

            return { status: HttpStatus.ACCEPTED, response: findCompany };
        } catch (error) {
            return {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                response: { error: RESPONSES.INTERNAL_SERVER_ERROR},
            };
        }
    }    
}
