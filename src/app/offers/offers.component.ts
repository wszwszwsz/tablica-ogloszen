import { Component, OnInit } from '@angular/core';
import { Offer } from './../models/Offer';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers!: Offer[];

  constructor() { }

  ngOnInit(): void {
    this.offers = [
      {
        content: 'First offer',
        number: '555 555 555',
        completed: false
      },
      {
        content: 'Second offer',
        number: '120 120 120',
        completed: true
      }
    ]
  }

}
