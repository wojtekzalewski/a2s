import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { SpaceShipType } from '../space-ship-type';
import { OrderFormValue } from '../order-form-value';

interface SpaceShipTypeOption {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  imports: [ReactiveFormsModule],
  templateUrl: './engineers-room.component.html',
  styleUrl: './engineers-room.component.css'
})
export class EngineersRoomComponent {
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

  orderSpaceShips(): void {
  const formValue: OrderFormValue = this.form.getRawValue();
  console.log(formValue);
  }

}
