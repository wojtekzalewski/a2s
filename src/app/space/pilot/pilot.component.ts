import { Component } from '@angular/core';

@Component({
  selector: 'app-pilot',
  imports: [],
  templateUrl: './pilot.component.html',
  styleUrl: './pilot.component.css'
})
export class PilotComponent {
@Input ({required: true}) pilot!: Pilot;
}
