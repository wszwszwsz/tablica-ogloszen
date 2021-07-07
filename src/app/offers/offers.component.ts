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
  //   this.offers = [
  //     {
  //       id: 3,
  //       name: 'Wynajmę pieski',
  //       content: 'mam do wynajecia troche piesków, zainteresowanych proszę o kontakt :) ',
  //       phone: '555 555 555'
  //   },
  //   {
  //       id: 4,
  //       name: 'Sprzedam opla',
  //       content: 'Mam do sprzedania prawie nowego opla, za jedyne 50k, proszę o kontakt ',
  //       phone: '232 323 232'
  //   }]
  // }

}
