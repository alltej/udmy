import { Component } from '@angular/core';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quote.interface";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService){
  }

  ionViewDidEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
     modal.onDidDismiss((remove: boolean) =>{
       if ( remove){
         // alt 1: reload the quotes array from service
         //this.quotes = this.quotesService.getFavoriteQuotes();
         // alt 2. remove quote from array
         this.onRemoveFromFavorites(quote);
       }
       //console.log('D ' + remove);
     });
    // modal.willLeave.subscribe(
    //   (remove: boolean) => console.log('S ' + remove)
    // )
  }


  onRemoveFromFavorites(quote: Quote)
  {
    this.quotesService.removeQuoteToFavorites(quote);
    const position = this.quotes.findIndex((quoteEl: Quote) =>{
      return quoteEl.id == quote.id;
    })
    this.quotes.splice(position, 1);
  }
  // quoteBackground: #f2f7c0,
  // altQuoteBackground: #f9ebc2
  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground': 'quoteBackground';;
  }
}
