import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PilotAttrs } from './space/pilot';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppValidatorsService {
  private http = inject(HttpClient);

  titleCase: ValidatorFn = (formControl) => {
    if (!formControl.value) { return null; }

    return /^[A-Z]/.test(formControl.value) ? null : {titleCase: true};
  }

  forbiddenName: AsyncValidatorFn = (formControl) => {
    if (!formControl.value) { return of(null); }

    const name = formControl.value;
    return this.http.get<PilotAttrs[]>(`${environment.apiUrl}/forbidden-names`, {params: {name}}).pipe(
      map((pilots) => pilots.length === 0 ? null : {forbiddenName: true}),
    )
  }
}
