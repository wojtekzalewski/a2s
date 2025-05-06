import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PilotService } from '../pilot.service';
import { AppValidatorsService } from '../../app-validators.service';

@Component({
  selector: 'app-pilot-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './pilot-form.component.html',
  styleUrl: './pilot-form.component.css',
})
export class PilotFormComponent implements OnInit {
  private router = inject(Router);
  private pilotService = inject(PilotService);
  private route = inject(ActivatedRoute);
  private appValidatorsService = inject(AppValidatorsService);
  
  form = new FormGroup({
    id: new FormControl(undefined, { nonNullable: true }),
    firstName: new FormControl('', { nonNullable: true, validators: [this.appValidatorsService.titleCase] }),
    lastName: new FormControl('', { nonNullable: true, asyncValidators: [this.appValidatorsService.forbiddenName],updateOn: 'blur' }),
    imageUrl: new FormControl('', { nonNullable: true }),
  });

  ngOnInit() {
    this.route.data
      .pipe(map((data) => data['pilot']))
      .subscribe((pilot) => this.form.patchValue(pilot));
  }  
  
  save(): void {
    const pilotAttrs = this.form.getRawValue();
    this.pilotService.savePilot(pilotAttrs).subscribe({
      next: () => this.router.navigate(['../..'], {relativeTo: this.route}),
      error: () => alert('Nie udało się zapisać pilota!')
    });
}

}
