import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAmigosComponent } from './card-amigos/card-amigos.component';
import { NavbarModuloModule } from '../navbar-modulo/navbar-modulo.module';
import { PageComponent } from './pagina/page.component';
import { AuspiciantesComponent } from './auspiciantes/auspiciantes.component';
import { PortadaComponent } from './portada/portada.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardAmigosComponent,
    PageComponent,
    AuspiciantesComponent,
    PortadaComponent
  ],

  imports: [
    CommonModule,
    NavbarModuloModule,
    RouterModule
  ],

  exports:[
    CardAmigosComponent,
    AuspiciantesComponent,
    PortadaComponent,
    PageComponent
  ]
})
export class InicioModule {


}
