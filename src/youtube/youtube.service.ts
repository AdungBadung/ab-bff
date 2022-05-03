import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class YoutubeService {
  private readonly API_KEY = process.env.YOUTUBE_API_KEY;
  readonly _host = `https://www.googleapis.com`;

  async search_list(input): Promise<string> {
    const encodedInput = encodeURIComponent(input);
    const endpoint = `/youtube/v3/search?key=${this.API_KEY}&part=snippet&q=${encodedInput}`;
    const response = await axios.get(`${this._host}${endpoint}`);
    return response.data;
  }
}
