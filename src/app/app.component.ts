import { Component, OnInit } from '@angular/core';
import { Offer } from './models/Offer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tablica-ogloszen';

 public offers!: Offer[];

ngOnInit(): void {
  this.offers = [
    {
      name: 'Wynajmę pieski',
      content: 'mam do wynajecia troche piesków, zainteresowanych proszę o kontakt :) ',
      phone: '555 555 555',
      accept: false,
      choice: false
  },
  {
      name: 'Sprzedam opla',
      content: 'Mam do sprzedania prawie nowego opla, za jedyne 50k, proszę o kontakt ',
      phone: '232 323 232',
      accept: false,
      choice: false
  }]
}
}