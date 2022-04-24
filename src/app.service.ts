import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.YOUTUBE_API_KEY;
  }
}
