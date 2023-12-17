import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureComponent { }
