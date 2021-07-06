import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { offers } from './../models/Offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

  offers = offers;

  // // offers!: Offer[];

  // constructor() { }
 
  // ngOnInit(): void {
  //   // this.offers = [
  //   //   {
  //   //     name
  //   //     content: 'First offer',
  //   //     phone: '555 555 555'
        
  //   //   },
  //   //   {
  //   //     content: 'Second offer',
  //   //     number: '120 120 120',
  //   //     added: true
  //   //   }
  //   // ]
  // }

}
