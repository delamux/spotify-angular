import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  artist: any;
  topTracks: any;
  isLoading: boolean;
  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
    ) {
    this.router.params.subscribe(params => {
      this.isLoading = true;
      this.spotify.getArtist(params.id)
        .subscribe( artist => {
          this.artist = artist;
          this.isLoading = false;
        });
      this.spotify.getArtistTopTracks(params.id)
        .subscribe( topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
          this.isLoading = false;
        });
    });
  }
}
