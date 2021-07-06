import { Identifiers } from "@angular/compiler";

export interface Offer {
    id: number;
    name: string;
    content: string;
    phone: string;
}

export const offers = [
    {
        id: 1,
        name: 'Wynajmę pieski',
        content: 'mam do wynajecia troche piesków, zainteresowanych proszę o kontakt :) ',
        phone: '555 555 555'
    },
    {
        id: 2,
        name: 'Sprzedam opla',
        content: 'Mam do sprzedania prawie nowego opla, za jedyne 50k, proszę o kontakt ',
        phone: '232 323 232'
    }
];
// export class Offer{
//     content!:string;
//     number!:string;
//     added!:boolean;
// }