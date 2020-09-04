import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Laser Tag: Da Movie','The Manchurian Candidate', 'Oceans 8', 'Galaxy Quest'];

   constructor() { }

   ngOnInit() {
   }
}
