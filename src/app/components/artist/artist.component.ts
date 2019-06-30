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
  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
    ) {
    this.router.params.subscribe(params => {
      this.spotify.getArtist(params.id)
        .subscribe( artist => {
          console.log(artist);
          this.artist = artist;
        });
    });
  }
}
