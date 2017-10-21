import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';
import{DetalhesPartidosPage} from '../detalhes-partidos/detalhes-partidos';

export class Partido{
  
  partido:String;
  uf:String;
  despesas:String;
}

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [Provider]
})

export class ListPage {
  partido1:Partido
  partido2:Partido
  partidos: Array<Partido>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.partido1 = new Partido()
    this.partido1.partido = 'Democratas'
    this.partido1.uf = 'RR'
    this.partido1.despesas = '427,42'

    this.partido2 = new Partido()
    this.partido2.partido = 'Partido Progressista'
    this.partido2.uf = 'CE'
    this.partido2.despesas = '2.204,10'

    this.partidos = new Array<Partido>()
    this.partidos.push(this.partido1)
    this.partidos.push(this.partido2)
  }

  detalhes(partido:Partido){
    this.navCtrl.push(DetalhesPartidosPage)
  }
}
