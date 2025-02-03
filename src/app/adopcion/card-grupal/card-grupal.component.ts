import { Component } from '@angular/core';
import { DatosService } from '../../datos/datos.service';

@Component({
  selector: 'app-card-grupal',
  standalone: false,

  templateUrl: './card-grupal.component.html',
  styleUrl: './card-grupal.component.css'
})
export class CardGrupalComponent {

  mascota: any[] = []; // Variable donde guardaremos las mascotas

  constructor(private datosService: DatosService) {} // Inyectamos el servicio

  ngOnInit(): void {
    this.mascota = this.datosService.getMascotas(); // Obtenemos los datos de las mascotas
  }

}
