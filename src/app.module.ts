import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InstagramModule } from './externals/instagram/instagram.module';
import { YoutubeModule } from './externals/youtube/youtube.module';
import { GoogleModule } from './externals/google/google.module';
import { NaverModule } from './externals/naver/naver.module';
import { DaumModule } from './externals/daum/daum.module';
import { TwitterModule } from './externals/twitter/twitter.module';

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
