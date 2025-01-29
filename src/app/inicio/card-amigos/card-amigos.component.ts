import { Component, Input } from '@angular/core';

@Component({
  selector: 'cardAmigos',
  standalone: false,

  templateUrl: './card-amigos.component.html',
  styleUrl: './card-amigos.component.css'
})
export class CardAmigosComponent {

  @Input() imagenUrl: string = "";
  @Input() nombre: string = "";
  @Input() edad: string = "";
  @Input() caracteristicas: string = "";



}
