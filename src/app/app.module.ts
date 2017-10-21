import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetalhesDeputadoPage } from '../pages/detalhes-deputado/detalhes-deputado';
import { DetalhesPartidosPage} from '../pages/detalhes-partidos/detalhes-partidos';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Provider } from '../providers/provider/provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetalhesDeputadoPage,
    DetalhesPartidosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetalhesDeputadoPage,
    DetalhesPartidosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider
  ]
})
export class AppModule {}
