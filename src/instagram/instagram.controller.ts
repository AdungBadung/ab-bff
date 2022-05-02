import { Controller, Get, Query } from '@nestjs/common';
import { InstagramService } from './instagram.service';

@Controller('instagram')
export class InstagramController {
  constructor(private _instagramService: InstagramService) {}

  @Get('/top_media')
  async top_media(@Query() query): Promise<string> {
    return this._instagramService.top_media(query);
  }
  @Get('/recent_media')
  async recent_media(@Query() query): Promise<string> {
    return this._instagramService.recent_media(query);
  }
}
