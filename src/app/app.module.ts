import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';
import { SingleOfferComponent } from './single-offer/single-offer.component';
import { SelectedOfferComponent } from './selected-offer/selected-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    SingleOfferComponent,
    SelectedOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
