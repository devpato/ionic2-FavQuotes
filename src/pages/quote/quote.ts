import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;    
                                             //pass data to page
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController ) {//View Controller the active visible active page
  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');

  }
  
  onClose(remove = false) {
    this.viewCtrl.dismiss(remove); //Deletes the page and unfavorites
  }

}
