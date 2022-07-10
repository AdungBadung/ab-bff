import { Test, TestingModule } from '@nestjs/testing';
import { NaverController } from './naver.controller';

describe('NaverController', () => {
  let controller: NaverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NaverController],
    }).compile();

    controller = module.get<NaverController>(NaverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
