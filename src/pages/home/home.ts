import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Provider]
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
