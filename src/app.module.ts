import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InstagramModule } from './instagram/instagram.module';
import { YoutubeModule } from './youtube/youtube.module';
import { GoogleModule } from './google/google.module';
import { NaverModule } from './naver/naver.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    InstagramModule,
    YoutubeModule,
    GoogleModule,
    NaverModule,
  ],
})
export class AppModule {}
