import { Test, TestingModule } from '@nestjs/testing';
import { AristasService } from './aristas.service';

describe('AristasService', () => {
  let service: AristasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AristasService],
    }).compile();

    service = module.get<AristasService>(AristasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
