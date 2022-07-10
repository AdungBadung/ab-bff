import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TwitterService {
  private readonly API_KEY = process.env.TWITTER_API_KEY;
  readonly _host = `https://api.twitter.com`;

  async search(query): Promise<string> {
    const endpoint = `/2/tweets/search/recent`;
    const queryString = Object.keys(query)
      .map((k) => {
        const v = query[k];
        return `&${k}=${encodeURIComponent(v)}`;
      })
      .join('');
    const response = await axios.get(
      `${this._host}${endpoint}?${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${this.API_KEY}`,
        },
      },
    );
    return response.data;
  }
}
