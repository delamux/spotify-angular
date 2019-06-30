import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  albums: any;
  isLoading: boolean;
  constructor(private spotify: SpotifyService) {
    this.isLoading = true;
    this.spotify.getNewReleases()
      .subscribe( (data) => {
        this.albums = data;
        this.isLoading = false;
      });
  }
}
