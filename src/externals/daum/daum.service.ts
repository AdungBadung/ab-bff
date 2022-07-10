import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DaumService {
  private readonly API_KEY = process.env.KAKAO_API_KEY;
  readonly _host = `https://dapi.kakao.com`;

  async searchImage(query): Promise<string> {
    const endpoint = `/v2/search/image`;
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
          Authorization: `KakaoAK ${this.API_KEY}`,
        },
      },
    );
    return response.data;
  }
}
