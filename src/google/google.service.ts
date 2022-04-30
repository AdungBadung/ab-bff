import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GoogleService {
  private readonly API_KEY = process.env.GOOGLE_API_KEY;
  readonly _host = `https://www.googleapis.com`;

  async search(query): Promise<string> {
    const endpoint = `/customsearch/v1?key=${this.API_KEY}`;
    const queryString = Object.keys(query)
      .map((k) => {
        const v = query[k];
        return `&${k}=${v}`;
      })
      .join('');
    const response = await axios.get(`${this._host}${endpoint}${queryString}`);
    return response.data;
  }
}
