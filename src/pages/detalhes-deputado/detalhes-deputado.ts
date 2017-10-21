import { Deputado } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesDeputadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-deputado',
  templateUrl: 'detalhes-deputado.html',
})
export class DetalhesDeputadoPage {
  deputado: Deputado
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.deputado = this.navParams.get('deputado')
    console.log(this.deputado)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesDeputadoPage');
  }

}
