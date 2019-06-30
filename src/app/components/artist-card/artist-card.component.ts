import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styles: []
})
export class ArtistCardComponent {
  @Input() item: any;
  constructor(private router: Router) { }
  viewArtist(id: string) {
    this.router.navigate(['/artist', id]);
  }
}
