import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';
import { InstagramModule } from './instagram/instagram.module';

@Module({
  imports: [ConfigModule.forRoot(), InstagramModule],
  controllers: [GoogleController],
  providers: [GoogleService],
})
export class AppModule {}
