import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { Pilot } from './pilot';
import { PilotService } from './pilot.service';

export const pilotResolver: ResolveFn<Pilot> = (route, state) => {
  const pilotService = inject(PilotService);
  if (route.params['id'] === 'new') {
    return of(new Pilot({firstName: '', lastName: '', imageUrl: ''}));
  } else {
    return pilotService.getPilot(route.params['id']);
  }
}
