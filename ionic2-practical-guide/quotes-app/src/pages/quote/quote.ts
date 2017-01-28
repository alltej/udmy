import { Component } from '@angular/core';
import {ViewController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  person: string;
  text: string;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams){}

   //modal is still loaded like a page although not accessible via the NavController
  ionViewDidLoad(){
      this.person = this.navParams.get('person');
      this.text = this.navParams.get('text');
  }

  onClose(){
    this.viewCtrl.dismiss();
  }
}
