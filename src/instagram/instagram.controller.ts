import { Controller, Get, Param } from '@nestjs/common';
import { InstagramService } from './instagram.service';

@Controller('instagram')
export class InstagramController {
  constructor(private _instagramService: InstagramService) {}

  @Get('/search/topmedia/:hashtag')
  async top_media(@Param('hashtag') hashtag: string): Promise<string> {
    return this._instagramService.top_media(hashtag);
  }
  @Get('/search/recentmedia/:hashtag')
  async recent_media(@Param('hashtag') hashtag: string): Promise<string> {
    return this._instagramService.recent_media(hashtag);
  }
}
