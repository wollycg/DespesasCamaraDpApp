import { DetalhesDeputadoPage } from './../detalhes-deputado/detalhes-deputado';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';

export class Deputado{
  nome:String;
  partido:String;
  uf:String;
  despesas:String;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Provider]
})

export class HomePage {
  deputado1:Deputado
  deputado2:Deputado
  deputados: Array<Deputado>
  constructor(public navCtrl: NavController) {
    this.deputado1 = new Deputado()
    this.deputado1.nome = 'Abel Mesquita Jr'
    this.deputado1.partido = 'Democratas'
    this.deputado1.uf = 'RR'
    this.deputado1.despesas = '427,42'

    this.deputado2 = new Deputado()
    this.deputado2.nome = 'Adail Carneiro'
    this.deputado2.partido = 'Partido Progressista'
    this.deputado2.uf = 'CE'
    this.deputado2.despesas = '2.204,10'

    this.deputados = new Array<Deputado>()
    this.deputados.push(this.deputado1)
    this.deputados.push(this.deputado2)
  }

  detalhes(deputado:Deputado){
    this.navCtrl.push(DetalhesDeputadoPage)
  }
}
