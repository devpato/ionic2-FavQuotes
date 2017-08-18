import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { MenuServices } from './../../services/menu';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuService: MenuServices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle) {
    this.menuService.setBackground(toggle.checked);
  }

  checkAltBackground() {
    return this.menuService.isAltBackground();
  }

}
