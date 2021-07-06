import { Component, OnInit } from '@angular/core';
import { Offer } from './../models/Offer';
@Component({
  selector: 'app-selected-offer',
  templateUrl: './selected-offer.component.html',
  styleUrls: ['./selected-offer.component.css']
})
export class SelectedOfferComponent implements OnInit {
  offers!: Offer[];
  constructor() { }

  ngOnInit(): void {
  }

}
