import { Controller, Get, Query } from '@nestjs/common';
import { DaumService } from './daum.service';

@Controller('daum/search')
export class DaumController {
  constructor(private _daumService: DaumService) {}

  @Get('/image')
  async search(@Query() query): Promise<string> {
    return this._daumService.searchImage(query);
  }
}
