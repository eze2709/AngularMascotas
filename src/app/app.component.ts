import { Component } from '@angular/core';
import { DatosService } from './datos/datos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amigosNew';

  imagenlogos: any;

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.imagenlogos = this.datosService.getImagenLogos();
  }

}
