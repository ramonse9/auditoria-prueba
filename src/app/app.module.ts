import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';

import { ChartsModule } from 'ng2-charts';
import { GraficaComponent } from './components/grafica/grafica.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { NavTiendasComponent } from './components/nav-tiendas/nav-tiendas.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { UsuarioInfomacionComponent } from './components/usuario-infomacion/usuario-infomacion.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ListaComponent } from './components/lista/lista.component';
import { TiendaDetalleComponent } from './components/tienda-detalle/tienda-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    GraficaComponent,
    PruebaComponent,
    NavTiendasComponent,
    ContenedorComponent,
    UsuarioInfomacionComponent,
    TarjetasComponent,
    ListaComponent,
    TiendaDetalleComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
