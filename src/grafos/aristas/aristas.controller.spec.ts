import { Test, TestingModule } from '@nestjs/testing';
import { AristasController } from './aristas.controller';

describe('AristasController', () => {
  let controller: AristasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AristasController],
    }).compile();

    controller = module.get<AristasController>(AristasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
