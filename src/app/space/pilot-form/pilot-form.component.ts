import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-pilot-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './pilot-form.component.html',
  styleUrl: './pilot-form.component.css',
})
export class PilotFormComponent implements OnInit {
  private route = inject(ActivatedRoute);

  form = new FormGroup({
    id: new FormControl(undefined, { nonNullable: true }),
    firstName: new FormControl('', { nonNullable: true }),
    lastName: new FormControl('', { nonNullable: true }),
    imageUrl: new FormControl('', { nonNullable: true }),
  });

  ngOnInit() {
    this.route.data
      .pipe(map((data) => data['pilot']))
      .subscribe((pilot) => this.form.patchValue(pilot));
  }   
}
