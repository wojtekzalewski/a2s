import { Component, Input } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { ZoomImageDirective } from 'src/app/shared/zoom-image.directive';
import { TickizePipe } from 'src/app/shared/tickize.pipe';

@Component({
  selector: 'app-space-ship',
  imports: [ZoomImageDirective, TickizePipe],
  templateUrl: './space-ship.component.html',
  styleUrl: './space-ship.component.css',
})
export class SpaceShipComponent {
  //spaceShip = {
    //modelName: 'Viper',
    //imageUrl: '/assets/viper.png  ',
   // health: 75,
    //activeShields: true,
    //activeWeapons: false,
  //};  

  @Input({required: true}) spaceShip!: SpaceShip;
}
