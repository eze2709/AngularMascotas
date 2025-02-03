import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModuloModule } from './navbar-modulo/navbar-modulo.module';
import { InicioModule } from './inicio/inicio.module';
import { AdopcionModule } from './adopcion/adopcion.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModuloModule,
    InicioModule,
    AdopcionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
