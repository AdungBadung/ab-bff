import { Controller, Get, Param } from '@nestjs/common';
import { InstagramService } from './instagram.service';

@Controller('instagram')
export class InstagramController {
  constructor(private _instagramService: InstagramService) {}

  @Get('/search/top_media/:hashtag')
  async top_media(@Param('hashtag') hashtag: string): Promise<string> {
    return this._instagramService.top_media(hashtag);
  }
  @Get('/search/recent_media/:hashtag')
  async recent_media(@Param('hashtag') hashtag: string): Promise<string> {
    return this._instagramService.recent_media(hashtag);
  }
}
