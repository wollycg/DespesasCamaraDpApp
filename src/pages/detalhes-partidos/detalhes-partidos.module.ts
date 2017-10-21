import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesPartidosPage } from './detalhes-partidos';

@NgModule({
  declarations: [
    DetalhesPartidosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesPartidosPage),
  ],
})
export class DetalhesPartidosPageModule {}
