import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   // chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   chores = ["Chore1"];
   finishedChores = ["Left a dollar under the pillow", "Cleaned my wings", "Brushed all of my teeth (that I collected", "Nother Chore1", "Nother Chore2", "Nother Chore3"];
   // finishedChores = ["Chore2", "Chore3"]

   targetImage = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';

   constructor() { }

   ngOnInit() {
   }

}
