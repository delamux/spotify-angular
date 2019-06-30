import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}
  private getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = {
      headers: environment.headers
    };

    return this.http.get(url, headers);
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => {
        return data.albums.items;
      })
    );
  }

  searchAnArtist(term: string) {
    return this.getQuery(`search?q=${ encodeURI(term) }&type=artist&limit=15`)
      .pipe( map( (data: any) => {
        return data.artists.items;
      })
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getArtistTopTracks(id: string) {
    return this.getQuery( `artists/${ id }/top-tracks?country=es` )
      .pipe( map( (data: any) => {
        return data.tracks;
      })
    );
  }
}
