import { Injectable } from '@angular/core';
import { interval, map, Observable, take} from 'rxjs';
import { OrderFormValue } from './order-form-value';
import { BomberShip, FighterShip, SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  static shipProductionTime = 2000;

  produceShips({shipCount, shipType}: OrderFormValue): Observable<SpaceShip> {
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => shipType === SpaceShipType.Fighter ? new FighterShip() : new BomberShip()),
      take(shipCount)
    );
  }

  constructor() { }
}
