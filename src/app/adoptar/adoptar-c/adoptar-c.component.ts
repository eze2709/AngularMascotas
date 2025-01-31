import { DatosService } from './../../datos/datos.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adoptar-c',
  standalone: false,
  templateUrl: './adoptar-c.component.html',
  styleUrl: './adoptar-c.component.css'
})
export class AdoptarCComponent {

  mascota: any = {};  // Aquí guardaremos los datos de la mascota
  mascotas: any[] = [];
  parametroId: number | null = null;  // Cambié el tipo a 'number'

  constructor(
    private route: ActivatedRoute,  // Para obtener parámetros de la URL
    private datosService: DatosService  // El servicio para obtener las mascotas
  ) { }

  ngOnInit(): void {
    this.mascotas = this.datosService.getMascotas();
    console.log(this.mascotas);

    this.route.paramMap.subscribe(params => {
      // Obtenemos el parámetro 'id' como string y lo convertimos a número
      this.parametroId = parseInt(params.get('id') || '', 10); // Usamos el operador '+' para convertir a número
      if (isNaN(this.parametroId)) {
        console.log('El id no es válido');
      } else {
        this.buscarMascotasPorId(this.parametroId);  // Usamos 'parametroId' si es válido
      }
    });
  }

  buscarMascotasPorId(id: number): void {
    // Buscar la mascota por el 'id' proporcionado
    this.mascota = this.mascotas.find(mascota => mascota.id === id);

    // Si no se encuentra la mascota, mostramos un mensaje
    if (!this.mascota) {
      console.log('Mascota no encontrada');
    }
  }
}
