import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { CardGrupalComponent } from './card-grupal/card-grupal.component';
import { CardIndividualComponent } from './card-individual/card-individual.component';
import { RouterModule } from '@angular/router';
import { InicioModule } from '../inicio/inicio.module';



@NgModule({
  declarations: [
    PaginaComponent,
    CardGrupalComponent,
    CardIndividualComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InicioModule
  ],
  exports: [
    PaginaComponent,
    CardGrupalComponent
  ]

})
export class AdopcionModule { }
