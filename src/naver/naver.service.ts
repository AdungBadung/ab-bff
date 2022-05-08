import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NaverService {
  private readonly AUTH_HEADER = {
    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
  };

  readonly _host = `https://openapi.naver.com/v1/search/image`;

  async search(query): Promise<string> {
    const queryString = Object.keys(query)
      .map((k) => {
        const v = query[k];
        return `&${k}=${encodeURIComponent(v)}`;
      })
      .join('');
    const response = await axios.get(`${this._host}?${queryString}`, {
      headers: this.AUTH_HEADER,
    });
    return response.data;
  }
}
