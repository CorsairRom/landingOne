import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './TopBar.component.html',
  styleUrls: ['./TopBar.component.css'],
})
export class TopBarComponent {
  logoUrl = 'assets/logo.jpg';
  logsn = 'assets/logo-sn-leyenda.png'
}
