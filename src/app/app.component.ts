import { Component } from '@angular/core';
import { PAGES } from "./mock-pages";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  pages = PAGES;

  ngOnInit() { 
  }

}


