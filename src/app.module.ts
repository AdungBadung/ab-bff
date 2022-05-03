import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';
import { InstagramModule } from './instagram/instagram.module';
import { YoutubeModule } from './youtube/youtube.module';

@Module({
  imports: [ConfigModule.forRoot(), InstagramModule, YoutubeModule],
  controllers: [GoogleController],
  providers: [GoogleService],
})
export class AppModule {}
