import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class InstagramService {
  private readonly API_KEY = process.env.INSTAGRAM_API_KEY;
  readonly _host = `https://graph.facebook.com`;
  private _facebook_id: string;
  private _instagram_id: string;

  async facebook_page_id(): Promise<string> {
    const endpoint = `/v13.0/me/accounts?access_token=${this.API_KEY}`;
    const response = await axios.get(`${this._host}${endpoint}`);
    return response.data.data[0].id;
  }

  async instagram_business_account(facebook_page_id): Promise<string> {
    const endpoint = `/v13.0/${facebook_page_id}?fields=instagram_business_account&access_token=${this.API_KEY}`;
    const response = await axios.get(`${this._host}${endpoint}`);
    return response.data.instagram_business_account.id;
  }

  async ig_hashtag_search(instagram_id, hashtag): Promise<string> {
    const endpoint = `/v13.0/ig_hashtag_search?user_id=${instagram_id}&q=${hashtag}&access_token=${this.API_KEY}`;
    const response = await axios.get(`${this._host}${endpoint}`);
    return response.data.data[0].id;
  }

  async top_media(hashtag): Promise<string> {
    if (this._facebook_id == undefined) {
      this._facebook_id = await this.facebook_page_id();
    }
    if (this._instagram_id == undefined) {
      this._instagram_id = await this.instagram_business_account(
        this._facebook_id,
      );
    }
    const hashtag_id = await this.ig_hashtag_search(
      this._instagram_id,
      hashtag,
    );
    const endpoint = `/${hashtag_id}/top_media?user_id=${this._instagram_id}&fields=id,caption,media_url&access_token=${this.API_KEY}`;
    const response = await axios.get(`${this._host}${endpoint}`);
    return response.data;
  }

  async recent_media(hashtag): Promise<string> {
    if (this._facebook_id == undefined) {
      this._facebook_id = await this.facebook_page_id();
    }
    if (this._instagram_id == undefined) {
      this._instagram_id = await this.instagram_business_account(
        this._facebook_id,
      );
    }
    const hashtag_id = await this.ig_hashtag_search(
      this._instagram_id,
      hashtag,
    );
    const endpoint = `/${hashtag_id}/recent_media?user_id=${this._instagram_id}&fields=id,caption,media_url`;
    const response = await axios.get(`${this._host}${endpoint}`);
    return response.data;
  }
}
