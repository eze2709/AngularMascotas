import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portada',
  standalone: false,

  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent {
  @Input() portada_img: string | undefined;
}
