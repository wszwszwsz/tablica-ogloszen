import { Component, OnInit } from '@angular/core';
import { offers } from './../models/Offer';

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.css']
})
export class SingleOfferComponent implements OnInit {
  offers = offers;
  constructor() { }
  
  ngOnInit(): void {
  }

}
