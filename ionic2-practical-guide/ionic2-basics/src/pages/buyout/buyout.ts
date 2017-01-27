import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Buyout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {

  productData: {item: string, quantity: number};

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    // this.item = navParams.get("item");
    // this.quantity = navParams.get("quantity");
    this.productData = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  onConfirmPurchase(){
    this.navCtrl.popToRoot();
  }

}
