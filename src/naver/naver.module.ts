import { Module } from '@nestjs/common';
import { NaverService } from './naver.service';
import { NaverController } from './naver.controller';

@Module({
  providers: [NaverService],
  controllers: [NaverController]
})
export class NaverModule {}
