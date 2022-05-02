import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class InstagramService {
  private readonly API_KEY = process.env.INSTAGRAM_API_KEY;
  readonly _host = `https://graph.facebook.com`;

  async facebook_page_id(): Promise<string> {
    const endpoint = `/v13.0/me/accounts?access_token=${this.API_KEY}`;
    const response = await axios.get(`${this._host}${endpoint}`);
    return response.data.data.id;
  }

  async instagram_id(facebook_page_id): Promise<string> {
    const endpoint = `/v13.0/${facebook_page_id}?fields=instagram_business_account&access_token=${this.API_KEY}`;
    const response = await axios.get(`${this._host}${endpoint}`);
    return response.data.instagram_business_account.id;
  }

  async hashtag_id(instagram_id, hashtag): Promise<string> {
    const endpoint = `ig_hashtag_search?user_id=${instagram_id}`;
    const queryString = `&q=${hashtag}`;
    const response = await axios.get(`${this._host}${endpoint}${queryString}`);
    return response.data;
  }

  async top_media(query): Promise<string> {
    const facebook_id = await this.facebook_page_id();
    const instgram_business_id = await this.instagram_id(facebook_id);
    const hashtag_id = await this.hashtag_id(instgram_business_id, query);
    const endpoint = `/${hashtag_id}/top_media?user_id=${instgram_business_id}&fields=id,caption,media_url`;
    const response = await axios.get(`${this._host}${endpoint}`);
    return response.data;
  }

  async recent_media(query): Promise<string> {
    const facebook_id = await this.facebook_page_id();
    const instgram_business_id = await this.instagram_id(facebook_id);
    const hashtag_id = await this.hashtag_id(instgram_business_id, query);
    const endpoint = `/${hashtag_id}/recent_media?user_id=${instgram_business_id}&fields=id,caption,media_url`;
    const response = await axios.get(`${this._host}${endpoint}`);
    return response.data;
  }
}
