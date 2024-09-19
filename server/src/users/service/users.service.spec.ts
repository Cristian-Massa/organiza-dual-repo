import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../service/users.service';
import { HttpStatus } from '@nestjs/common';
describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user', async () => {
    const result = await service.create({
      name: 'Test user',
      email: 'test@test.com',
      password: 'test123',
      address: 'Test address',
      city: 'Test city',
      country: 'Test country',
    });

    expect(result.status).toBe(HttpStatus.CREATED);
    expect(result.response).toBe('Usuario creado.');
    expect(result.payload).toBeDefined();
  });

  it('should fail to create a new user', async () => {
    const result = await service.create({
      name: 'Test user',
      email: 'test@test.com',
      password: undefined,
      address: 'Test address',
      city: 'Test city',
      country: 'Test country',
    });

    expect(result.status).toBe(HttpStatus.BAD_REQUEST);
    expect(result.response).toBe('Falta informacion.');
  });

  it('should ban a user', async () => {
    const result = await service.ban({
      id: 'test',
      isTemp: true,
      expire: new Date(),
    });

    expect(result.status).toBe(HttpStatus.ACCEPTED);
    expect(result.response).toBe('Test fue baneado el dia y hora: ' + new Date().toISOString() + ', hasta: ' + new Date().toISOString());
  });

  it('should fail to ban a user', async () => {
    const result = await service.ban({
      id: undefined,
      isTemp: true,
      expire: new Date(),
    });

    expect(result.status).toBe(HttpStatus.BAD_REQUEST);
    expect(result.response).toBe('Falta el id del usuario a banear.');
  });

  it('should login a user', async () => {
    const result = await service.login({
      email: 'test@test.com',
      password: 'test123',
    });

    expect(result.status).toBe(HttpStatus.CREATED);
    expect(result.response).toBe('Bienvenido.');
    expect(result.payload).toBeDefined();
  });

  it('should fail to login a user', async () => {
    const result = await service.login({
      email: undefined,
      password: undefined
    });

    expect(result.status).toBe(HttpStatus.BAD_REQUEST);
    expect(result.response).toBe('Falta informacion.');
  });

  it('should delete a user', async () => {
    const result = await service.delete({ id: 'test' });

    expect(result.status).toBe(HttpStatus.ACCEPTED);
    expect(result.response).toBe('Se borro el usuario de id: test');
  });

  it('should fail to delete a user', async () => {
    const result = await service.delete({
      id: undefined,
    });

    expect(result.status).toBe(HttpStatus.BAD_REQUEST);
    expect(result.response).toBe('Falta el id del usuario.');
  });

  it('should get a user', async () => {
    const result = await service.get({ id: 'test' });

    expect(result.status).toBe(HttpStatus.ACCEPTED);
    expect(result.response).toBeDefined();
  });

  it('should fail to get a user', async () => {
    const result = await service.get({
      id: undefined,
    });

    expect(result.status).toBe(HttpStatus.BAD_REQUEST);
    expect(result.response).toBe('Falta el id del usuario.');
  });

  it('should get all users', async () => {
    const result = await service.getAll({ page: 1 });

    expect(result.status).toBe(HttpStatus.ACCEPTED);
    expect(result.response).toBeDefined();
  });
});