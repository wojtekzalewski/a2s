import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { SpaceShipType } from '../space-ship-type';
import { OrderFormValue } from '../order-form-value';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';
import { AsyncPipe } from '@angular/common';


interface SpaceShipTypeOption {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './engineers-room.component.html',
  styleUrl: './engineers-room.component.css'
})
export class EngineersRoomComponent {
  
  private spaceShipService = inject(SpaceShipService);

  shipsCount = this.spaceShipService.hangarShipsCount;

  //@Output()shipProduced = new EventEmitter<SpaceShip>();

  spaceShipTypeOptions: SpaceShipTypeOption[] = [
    {label: "Mysliwiec", value: SpaceShipType.Fighter},
    {label: "Bombowiec", value: SpaceShipType.Bomber}
  ];

  form = new FormGroup({
    shipType: new FormControl<SpaceShipType>(SpaceShipType.Fighter, {
      validators: [Validators.required],
      nonNullable: true
    }),

    shipCount: new FormControl<number>(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
      nonNullable: true
    })
  });

  isProducing: boolean = false;

  orderSpaceShips(): void{
    const formValue: OrderFormValue = this.form.getRawValue();
    this.isProducing = true;
    this.spaceShipService.produceShips(formValue)
        .subscribe({
          next: (ship) => this.shipProduced.emit(ship),
          complete: () => this.isProducing = false
        });
  }

}
