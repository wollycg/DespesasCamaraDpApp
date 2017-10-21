import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesDeputadoPage } from './detalhes-deputado';

@NgModule({
  declarations: [
    DetalhesDeputadoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesDeputadoPage),
  ],
})
export class DetalhesDeputadoPageModule {}
