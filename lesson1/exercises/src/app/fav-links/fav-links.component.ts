import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://www.google.com/search?client=firefox-b-1-d&q=underline+css", "https://education.launchcode.org/intro-to-professional-web-dev/chapters/angular-lsn1/exercises.html"]

  constructor() { }

  ngOnInit() {
  }

}
