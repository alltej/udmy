import { Component } from '@angular/core';
import {BuyoutPage} from "../buyout/buyout";
import {NavController} from "ionic-angular";

/*
  Generated class for the Shop page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  buyoutPage = BuyoutPage;

  constructor(private navCtrl: NavController){}

  onItemSelected(productData: {item: string, quantity: number}){
    this.navCtrl.push(BuyoutPage, productData);
  }
}
