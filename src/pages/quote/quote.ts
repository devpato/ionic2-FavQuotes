import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController ) {//View Controller the active visible active page
  }

  
  onClose() {
    this.viewCtrl.dismiss(); //Deletes the page
  }

}
