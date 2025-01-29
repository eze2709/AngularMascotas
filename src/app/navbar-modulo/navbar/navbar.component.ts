import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbarComponente',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() logo: string | undefined;
}
//
