import { Injectable } from '@angular/core';
import { interval, map, Observable, take, BehaviorSubject, tap } from 'rxjs';
import { OrderFormValue } from './order-form-value';
import { BomberShip, FighterShip, SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  static shipProductionTime = 2000;
  hangarShips = new BehaviorSubject<SpaceShip[]>([]);

  hangarShipsCount = this.hangarShips.pipe(
    map((ships) => ships.length)
  );

  produceShips({shipCount, shipType}: OrderFormValue): Observable<SpaceShip> {
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => shipType === SpaceShipType.Fighter ? new FighterShip() : new BomberShip()),
      take(shipCount),
      tap((spaceShip) => this.hangarShips.next([...this.hangarShips.getValue(), spaceShip]))
    );
  }

  removeShip(shipIndex: number) {
    const ships = [...this.hangarShips.getValue()];
    ships.splice(shipIndex, 1);
    this.hangarShips.next(ships);
  }
}
