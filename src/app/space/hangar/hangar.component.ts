import { Component } from '@angular/core';
import { SpaceShipComponent } from '../space-ship/space-ship.component';

@Component({
  selector: 'app-hangar',
  imports: [SpaceShipComponent],
  templateUrl: './hangar.component.html',
  styleUrl: './hangar.component.css'
})
export class HangarComponent {

}
