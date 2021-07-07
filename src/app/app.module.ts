import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';
import { SingleOfferComponent } from './single-offer/single-offer.component';
import { SelectedOfferComponent } from './selected-offer/selected-offer.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { AcceptedOfferComponent } from './accepted-offer/accepted-offer.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: AppComponent },
  {path: 'offers', component: OffersComponent },
  {path: 'offer', component: SingleOfferComponent },
  {path: 'add', component: AddOfferComponent},
  {path: 'selected', component: SelectedOfferComponent},
  {path: 'accepted', component: AcceptedOfferComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    SingleOfferComponent,
    SelectedOfferComponent,
    FooterComponent,
    AddOfferComponent,
    AcceptedOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
