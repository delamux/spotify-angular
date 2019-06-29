import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}
  getNewReleases() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers: environment.headers
    });
  }
}
