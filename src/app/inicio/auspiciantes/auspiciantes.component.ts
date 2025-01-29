import { Component, Input } from '@angular/core';

@Component({
  selector: 'auspiciantes',
  standalone: false,

  templateUrl: './auspiciantes.component.html',
  styleUrl: './auspiciantes.component.css'
})
export class AuspiciantesComponent {

  @Input() imagenAus: string = "";


}
