import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { GoogleService } from './google.service';

@Controller('google')
export class GoogleController {
  constructor(private _googleService: GoogleService) {}

  @Get()
  async search(@Query() query): Promise<string> {
    return this._googleService.search(query);
  }
}
