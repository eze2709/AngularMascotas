import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { console.log( this.getMascotas())}

   // Datos de imágenes
   getImagenLogos() {
    return {
      logo: 'imagen/logo.png',
      logofoter: 'imagen/logoFooter.png',
      logoFacebook: 'imagen/facebook.png',
      logoInstagram: 'imagen/instagram.png',
      logoTwitter: 'imagen/twitter.png',
      portada: 'imagen/portada.png'
    };
  }

  // Datos de mascotas
  getMascotas() {
    return [
      { imagenUrl: 'imagen/mascota.png', nombre: 'SEÑORA', edad: '8 meses', caracteristicas: 'tierno, tranquilo' },
      { imagenUrl: 'imagen/mascota.png', nombre: 'toby', edad: '2 años', caracteristicas: 'juguetón, leal' },
      { imagenUrl: 'imagen/mascota2.png', nombre: 'mila', edad: '1 año', caracteristicas: 'curiosa, activa' },
      { imagenUrl: 'imagen/mascota3.png', nombre: 'lucas', edad: '3 años', caracteristicas: 'amigable, obediente' },
      { imagenUrl: 'imagen/mascota4.png', nombre: 'sasha', edad: '5 meses', caracteristicas: 'traviesa, cariñosa' },
      { imagenUrl: 'imagen/mascota.png', nombre: 'SEÑORA', edad: '8 meses', caracteristicas: 'tierno, tranquilo' },
      { imagenUrl: 'imagen/mascota.png', nombre: 'toby', edad: '2 años', caracteristicas: 'lorem, leal' },
      { imagenUrl: 'imagen/mascota2.png', nombre: 'mila', edad: '1 año', caracteristicas: 'curiosa, activa' }
    ];
  }

  // Datos de auspiciantes
  getAuspiciantes() {
    return [
      { imagenAus: 'imagen/aus1.png' },
      { imagenAus: 'imagen/aus3.png' },
      { imagenAus: 'imagen/aus4.png' },
      { imagenAus: 'imagen/aus5.png' },
      { imagenAus: 'imagen/aus2.png' },
      { imagenAus: 'imagen/aus7.png' },
      { imagenAus: 'imagen/aus8.png' }
    ];
  }

}
