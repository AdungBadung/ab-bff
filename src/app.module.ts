import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [GoogleController],
  providers: [GoogleService],
})
export class AppModule {}
