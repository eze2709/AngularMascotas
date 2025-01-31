import { DatosService } from './../../datos/datos.service';
import { Component } from '@angular/core';


@Component({
  selector: 'pageInicio',
  standalone: false,

  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

  imagenlogos: any;
  mascotas: any[] = [];
  auspiciantes: any[] = [];

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.imagenlogos = this.datosService.getImagenLogos();
    this.mascotas = this.datosService.getMascotas();
    this.auspiciantes = this.datosService.getAuspiciantes();
  }



}
