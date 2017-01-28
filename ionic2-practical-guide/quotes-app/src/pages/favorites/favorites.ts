import { Component } from '@angular/core';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quote.interface";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController){
  }

  ionViewDidEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
     modal.onDidDismiss((remove: boolean) =>{
       if ( remove){
         this.quotesService.removeQuoteToFavorites(quote);
         // alt 1: reload the quotes array from service
         //this.quotes = this.quotesService.getFavoriteQuotes();
         // alt 2. remove quote from array
         const position = this.quotes.findIndex((quoteEl: Quote) =>{
           return quoteEl.id == quote.id;
         })
         this.quotes.splice(position, 1);
       }
       //console.log('D ' + remove);
     });
    // modal.willLeave.subscribe(
    //   (remove: boolean) => console.log('S ' + remove)
    // )
  }
}
