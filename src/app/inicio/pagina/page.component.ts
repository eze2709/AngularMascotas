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

  // imagenlogos = {
  //   logo: 'imagen/logo.png',
  //   logofoter: 'imagen/logoFooter.png',
  //   logoFacebook: 'imagen/facebook.png',
  //   logoInstagram: 'imagen/instagram.png',
  //   logoTwitter: 'imagen/twitter.png',
  //   portada: 'imagen/portada.png'
  // };

  // mascotas = [
  //   {
  //     imagenUrl: 'imagen/mascota.png',
  //     nombre: 'SEÑORA',
  //     edad: '8 meses',
  //     caracteristicas: 'tierno, tranquilo'
  //   },
  //   {
  //     imagenUrl: 'imagen/mascota.png',
  //     nombre: 'toby',
  //     edad: '2 años',
  //     caracteristicas: 'juguetón, leal'
  //   },
  //   {
  //     imagenUrl: 'imagen/mascota2.png',
  //     nombre: 'mila',
  //     edad: '1 año',
  //     caracteristicas: 'curiosa, activa'
  //   },
  //   {
  //     imagenUrl: 'imagen/mascota3.png',
  //     nombre: 'lucas',
  //     edad: '3 años',
  //     caracteristicas: 'amigable, obediente'
  //   },
  //   {
  //     imagenUrl: 'imagen/mascota4.png',
  //     nombre: 'sasha',
  //     edad: '5 meses',
  //     caracteristicas: 'traviesa, cariñosa'
  //   },
  //   {
  //     imagenUrl: 'imagen/mascota.png',
  //     nombre: 'SEÑORA',
  //     edad: '8 meses',
  //     caracteristicas: 'tierno, tranquilo'
  //   },
  //   {
  //     imagenUrl: 'imagen/mascota.png',
  //     nombre: 'toby',
  //     edad: '2 años',
  //     caracteristicas: 'lorem, leal'
  //   },
  //   {
  //     imagenUrl: 'imagen/mascota2.png',
  //     nombre: 'mila',
  //     edad: '1 año',
  //     caracteristicas: 'curiosa, activa'
  //   }
  // ];


  // auspiciantes = [
  //   {
  //     imagenAus: 'imagen/aus1.png'
  //   },
  //   {
  //     imagenAus: 'imagen/aus3.png'
  //   },
  //   {
  //     imagenAus: 'imagen/aus4.png'
  //   },
  //   {
  //     imagenAus: 'imagen/aus5.png'
  //   },
  //   {
  //     imagenAus: 'imagen/aus2.png'
  //   },
  //   {
  //     imagenAus: 'imagen/aus7.png'
  //   },
  //   {
  //     imagenAus: 'imagen/aus8.png'
  //   }
  // ];



}
