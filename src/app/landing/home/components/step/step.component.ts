import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {

  imgstep1 = 'assets/home/Vehicle-Inspection-1.jpeg';
  // src\assets\home\Vehicle-Inspection-1.jpeg
}
