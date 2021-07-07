import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent extends AppComponent {

  // offers = offers;

  // public offers!: Offer[];

  constructor() {
    super();
  }
 
  // ngOnInit(): void {
  //   this.offers = [
  //     {
  //       name: 'Wynajmę pieski',
  //       content: 'mam do wynajecia troche piesków, zainteresowanych proszę o kontakt :) ',
  //       phone: '555 555 555',
  //       accept: false,
  //       choice: false
  //   },
  //   {
  //       name: 'Sprzedam opla',
  //       content: 'Mam do sprzedania prawie nowego opla, za jedyne 50k, proszę o kontakt ',
  //       phone: '232 323 232',
  //       accept: false,
  //       choice: false
  //   }]
  // }

}
