import { Test, TestingModule } from '@nestjs/testing';
import { PlannersController } from './planners.controller';

describe('PlannersController', () => {
  let controller: PlannersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlannersController],
    }).compile();

    controller = module.get<PlannersController>(PlannersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
