import { Controller, Get, Query } from '@nestjs/common';
import { TwitterService } from './twitter.service';

@Controller('twitter')
export class TwitterController {
  constructor(private _twitterService: TwitterService) {}

  @Get('/search')
  async search(@Query() query): Promise<string> {
    return this._twitterService.search(query);
  }
}
