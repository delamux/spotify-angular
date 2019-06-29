import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists: any;
  constructor(private spotify: SpotifyService) { }
  search(term: string) {
    this.spotify.searchAnArtist( term )
      .subscribe( (data: any) => {
        this.artists = data;
      });
  }
}
