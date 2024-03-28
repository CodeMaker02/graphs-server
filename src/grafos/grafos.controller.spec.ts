import { Test, TestingModule } from '@nestjs/testing';
import { GrafosController } from './grafos.controller';

describe('GrafosController', () => {
  let controller: GrafosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrafosController],
    }).compile();

    controller = module.get<GrafosController>(GrafosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
