import { Test, TestingModule } from '@nestjs/testing';
import { DaumService } from './daum.service';

describe('DaumService', () => {
  let service: DaumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaumService],
    }).compile();

    service = module.get<DaumService>(DaumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
