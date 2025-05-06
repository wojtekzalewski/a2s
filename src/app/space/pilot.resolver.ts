import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Pilot } from './pilot';
import { PilotService } from './pilot.service';
import { of } from 'rxjs';

export const pilotResolver: ResolveFn<Pilot> = (route, state) => {
  const pilotService = inject(PilotService);
  if (route.params['íd'] === 'new') {
    return of (new Pilot ({firstName: '', lastName: '', imageUrl: ''}));

  } else {
    return pilotService.getPilot(route.params['íd']);
  }

  //return true;

};
