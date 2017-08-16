import { QuotesService } from './../../services/quotes';
import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string}
  constructor( private navParams: NavParams,
  private alertCtrl: AlertController,
  private quotesService: QuotesService
  ){}
    
    ngOnInit() {
      this.quoteGroup = this.navParams.data;
    } 

    /*ionViewDidLoad(){
      this.quoteGroup = this.navParams.data;
      //Add elvis operator (?)
    }*/
    
    onAddToFavorite(selectedQuote:Quote) {//Alert on Ionic Doc
      const alert = this.alertCtrl.create({
        title:'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are yo sure you want to add the quote to Favorites?',
        buttons: [
          {
            text: 'Yes',
            handler: ()=> {
              this.quotesService.addQuoteToFavorites(selectedQuote);
            }
          },
          {
            text: 'No',
            handler: ()=> {
              console.log("Oops!");
            }
          }
        ]
      });
      alert.present();
    }

}
