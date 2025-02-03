import { Component } from '@angular/core';
import { DatosService } from '../../datos/datos.service';


@Component({
  selector: 'app-pagina',
  standalone: false,

  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent {

  mascota: any[] = []; // Variable donde guardaremos las mascotas

  constructor(private datosService: DatosService) {} // Inyectamos el servicio

  ngOnInit(): void {
    this.mascota = this.datosService.getMascotas(); // Obtenemos los datos de las mascotas
  }

}
