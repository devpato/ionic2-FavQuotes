import { Quote } from './../../data/quote.interface';
import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(public quotesService: QuotesService) {}

  ionViewWillEnter() { //this will work even if the page is cached
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

}
