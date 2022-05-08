import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InstagramModule } from './instagram/instagram.module';
import { YoutubeModule } from './youtube/youtube.module';
import { GoogleModule } from './google/google.module';
import { NaverModule } from './naver/naver.module';
import { DaumModule } from './daum/daum.module';
import { TwitterModule } from './twitter/twitter.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    InstagramModule,
    YoutubeModule,
    GoogleModule,
    NaverModule,
    DaumModule,
    TwitterModule,
  ],
})
export class AppModule {}
