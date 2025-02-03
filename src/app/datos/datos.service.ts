import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

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
      { imagenUrl: 'imagen/mascota.png', nombre: 'Señora', edad: '8 meses', caracteristicas: 'tierno, tranquilo', descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis quis officia voluptate? Aperiam consequuntur iure, quaerat quae id blanditiis, modi est libero nobis eligendi reprehenderit quas a soluta ea.", id: 1 },
      { imagenUrl: 'imagen/mascota1.png', nombre: 'Toby', edad: '2 años', caracteristicas: 'juguetón, leal', descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis quis officia voluptate? Aperiam consequuntur iure, quaerat quae id blanditiis, modi est libero nobis eligendi reprehenderit quas a soluta ea.", id: 2 },
      { imagenUrl: 'imagen/mascota2.png', nombre: 'Mila', edad: '1 año', caracteristicas: 'curiosa, activa', descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis quis officia voluptate? Aperiam consequuntur iure, quaerat quae id blanditiis, modi est libero nobis eligendi reprehenderit quas a soluta ea.", id: 3 },
      { imagenUrl: 'imagen/mascota3.png', nombre: 'Lucas', edad: '3 años', caracteristicas: 'amigable, obediente', descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis quis officia voluptate? Aperiam consequuntur iure, quaerat quae id blanditiis, modi est libero nobis eligendi reprehenderit quas a soluta ea.", id: 4 },
      { imagenUrl: 'imagen/mascota4.png', nombre: 'Sasha', edad: '5 meses', caracteristicas: 'traviesa, cariñosa', descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis quis officia voluptate? Aperiam consequuntur iure, quaerat quae id blanditiis, modi est libero nobis eligendi reprehenderit quas a soluta ea.", id: 5 },
      { imagenUrl: 'imagen/mascota6.png', nombre: 'Señora', edad: '8 meses', caracteristicas: 'tierno, tranquilo', descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis quis officia voluptate? Aperiam consequuntur iure, quaerat quae id blanditiis, modi est libero nobis eligendi reprehenderit quas a soluta ea.", id: 6 },
      { imagenUrl: 'imagen/mascota5.png', nombre: 'Toby', edad: '2 años', caracteristicas: 'lorem, leal', descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis quis officia voluptate? Aperiam consequuntur iure, quaerat quae id blanditiis, modi est libero nobis eligendi reprehenderit quas a soluta ea.", id: 7 },
      { imagenUrl: 'imagen/mascota7.png', nombre: 'Mila', edad: '1 año', caracteristicas: 'curiosa, activa', descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis quis officia voluptate? Aperiam consequuntur iure, quaerat quae id blanditiis, modi est libero nobis eligendi reprehenderit quas a soluta ea.", id: 8 }
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
