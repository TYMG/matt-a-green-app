import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpdr-fl-app',
  template: `
<app-header></app-header>
  <router-outlet name="approuter"></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
