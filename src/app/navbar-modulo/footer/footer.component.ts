import { Component, Input } from '@angular/core';

@Component({
  selector: 'Compfooter',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() logofoter: string | undefined;
  @Input() logoTwitter: string | undefined;
  @Input() logoInstagram: string | undefined;
  @Input() logoFacebook: string | undefined;

}
