import { CanActivateFn, Router } from '@angular/router';
import { SpaceShipService } from './space-ship.service';
import { inject } from '@angular/core';

export const destructionGuard: CanActivateFn = (route, state) => {
  const spaceShipService = inject(SpaceShipService);
  const router = inject(Router);

const hasSpaceShips = spaceShipService.hangarShips.getValue().length > 0;
if (hasSpaceShips) { return true; }

alert('Nie ma statkow w hangarze!');
return router.parseUrl('/');
  

return true;
};
