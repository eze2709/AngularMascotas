import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAccesoComponent } from './registro-acceso/registro-acceso/registro-acceso.component';
import { PageComponent } from './inicio/pagina/page.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: PageComponent},
  {path: 'registrar', component: RegistroAccesoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
