import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Offer } from '../models/Offer';
import { OffersComponent } from '../offers/offers.component';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent extends AppComponent {

  addOfferName:string = "";
  addOfferContent:string = "";
  addOfferPhone:string = "";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  addOffer () {
      this.offers.push({
      name: this.addOfferName,
      content: this.addOfferContent,
      phone: this.addOfferPhone,
      accept: false,
      choice: false
    });

  }
}
