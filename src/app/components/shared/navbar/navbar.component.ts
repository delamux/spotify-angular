import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  name: string;
  constructor() {
    this.name = 'delAmux';
  }

  ngOnInit() {
  }

}
