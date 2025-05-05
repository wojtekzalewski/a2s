import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, take, tap} from 'rxjs';
import { OrderFormValue } from './order-form-value';
import { BomberShip, FighterShip, SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  static shipProductionTime = 2000;

  hangarShips = new BehaviorSubject<SpaceShip[]>([]);

  hangarShipCount = this.hangarShips.pipe(
    map((ships) => ships.length)
  );

  produceShips({shipCount, shipType}: OrderFormValue): Observable<SpaceShip> {
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => shipType === SpaceShipType.Fighter ? new FighterShip() : new BomberShip()),
      take(shipCount),
      tap((spaceShip) =>
      this.hangarShips.next([
        ...this.hangarShips.getValue(),
      ])
      )
    )
  }

  constructor() { }
}
