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
  hasError: boolean;
  error: object;
  constructor(private spotify: SpotifyService) {
    this.isLoading = true;
    this.hasError = false;
    this.spotify.getNewReleases()
      .subscribe( (data) => {
        this.albums = data;
        this.isLoading = false;
      }, error => {
        console.log(error);

        this.hasError = true;
        this.error = error;
      });
  }
}
