import { Controller, Get, Query } from '@nestjs/common';
import { NaverService } from './naver.service';

@Controller('naver/search')
export class NaverController {
  constructor(private _naverService: NaverService) {}

  @Get()
  async search(@Query() query): Promise<string> {
    return this._naverService.search(query);
  }
}
