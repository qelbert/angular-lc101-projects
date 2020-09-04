import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'These are my bomb photooooooos!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://pocket-syndicated-images.s3.amazonaws.com/5eb9824492d28.jpeg';
  image3 = 'https://pocket-syndicated-images.s3.amazonaws.com/5eb982be55470.jpg';

  constructor() { }

  ngOnInit() {
  }

}