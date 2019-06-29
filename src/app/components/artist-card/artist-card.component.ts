import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styles: []
})
export class ArtistCardComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}
