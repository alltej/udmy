import {Component, OnInit} from "@angular/core";
import {NavParams, NavController} from "ionic-angular";
/**
 * Created by Allan Tejano on 1/26/2017.
 */


@Component({
  selector: 'page-user',
  templateUrl: 'user.html'

})
export class UserPage implements OnInit{
  name: string;

  constructor(private navParams: NavParams,
              private navCtrl: NavController){}

  ngOnInit(){
    this.name = this.navParams.get('userName');
  }

  onGoBack(){
    this.navCtrl.pop();
    //this.navCtrl.popToRoot();
  }
}
