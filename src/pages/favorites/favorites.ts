import { MenuServices } from './../../services/menu';
import { QuotePage } from './../quote/quote';
import { Quote } from './../../data/quote.interface';
import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(public quotesService: QuotesService,
                     private modalCtrl: ModalController,
                     private menuCtrl: MenuController,
                     private menuService: MenuServices
  ) {}

  ionViewWillEnter() { //this will work even if the page is cached
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
   /* modal.onDidDismiss((remove:boolean) => {
      console.log(remove);
    });*/
    modal.onDidDismiss((remove:boolean) => {//when i click close
      if(remove) {
        this.onRemoveToFavorite(quote)
      }
    });  
  }
  //Remove on slide to the left
   onRemoveToFavorite(quote: Quote) {
       this.quotesService.removeQuoteFromFavorites(quote);
       this.quotes = this.quotesService.getFavoriteQuotes();
    }

    //Open Top Menu
    /*onOpenMenu() {
      this.menuCtrl.open();
    }*/

    /*getBackground() {
      this.menuService.isAltBackground() ? 'altBackground': 'primary';
    }*/

    
  getBackground() {
    return this.menuService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.menuService.isAltBackground();
  }
}
