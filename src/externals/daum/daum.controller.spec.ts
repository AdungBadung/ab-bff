import { Test, TestingModule } from '@nestjs/testing';
import { DaumController } from './daum.controller';

describe('DaumController', () => {
  let controller: DaumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaumController],
    }).compile();

    controller = module.get<DaumController>(DaumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
