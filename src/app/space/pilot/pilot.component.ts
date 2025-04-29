import { Component, Input } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot',
  imports: [],
  templateUrl: './pilot.component.html',
  styleUrl: './pilot.component.css'
})
export class PilotComponent {
  @Input ({required: true}) pilot!: Pilot;
}
