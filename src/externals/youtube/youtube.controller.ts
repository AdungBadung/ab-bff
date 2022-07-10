import { Controller, Get, Param } from '@nestjs/common';
import { YoutubeService } from './youtube.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private _youtubeService: YoutubeService) {}

  @Get('/search/list/:input')
  async search_list(@Param('input') input: string) {
    return this._youtubeService.search_list(input);
  }
}
