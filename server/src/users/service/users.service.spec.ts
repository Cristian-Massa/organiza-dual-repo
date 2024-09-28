import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { HttpStatus } from '@nestjs/common';
import { User } from '../schema/user.schema';
import { getModelToken } from '@nestjs/mongoose';
describe('UsersService', () => {
  let service: UsersService;
  let model: User;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, {provide: getModelToken(User.name), useValue: User}],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    it('should create a user', async () => {

    });
  });
});