import { Component, inject } from '@angular/core';
import { SpaceShipType } from '../space-ship-type.enum';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderFormValue } from '../order-form-value';
import { SpaceShipService } from '../space-ship.service';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

interface SpaceShipTypeOption {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent {
  private spaceShipService = inject(SpaceShipService)

  spaceShipTypeOptions: SpaceShipTypeOption[] = [
    {label: 'Myśliwiec', value: SpaceShipType.Fighter},
    {label: 'Bombowiec', value: SpaceShipType.Bomber}
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

  isProducing = false;

  shipsCount = this.spaceShipService.hangarShipsCount;

  orderSpaceShips(): void {
    const formValue: OrderFormValue = this.form.getRawValue();
    this.isProducing = true;
    this.spaceShipService.produceShips(formValue)
      .subscribe({
        complete: () => this.isProducing = false
      });
  }

}
