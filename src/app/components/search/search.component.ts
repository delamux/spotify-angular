import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists: any;
  isLoading: boolean;
  constructor(private spotify: SpotifyService) {
  }
  search(term: string) {
    this.isLoading = true;
    this.spotify.searchAnArtist( term )
      .subscribe( (data: any) => {
        this.artists = data;
        this.isLoading = false;
      });
  }
}
