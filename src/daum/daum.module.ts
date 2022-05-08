import { Module } from '@nestjs/common';
import { DaumController } from './daum.controller';
import { DaumService } from './daum.service';

@Module({
  controllers: [DaumController],
  providers: [DaumService],
})
export class DaumModule {}
