import { Test, TestingModule } from '@nestjs/testing';
import { GrafosService } from './grafos.service';

describe('GrafosService', () => {
  let service: GrafosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrafosService],
    }).compile();

    service = module.get<GrafosService>(GrafosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
