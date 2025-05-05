import { Routes } from '@angular/router';
import { HangarComponent } from './space/hangar/hangar.component';
import { BlackHoleComponent } from './black-hole/black-hole.component';

export const routes: Routes = [
{
    path: 'space',
    component: HangarComponent
},
{
    path: '',
    redirectTo: 'space',
    pathMatch: 'full'
},
{ 
    path: '**', component: BlackHoleComponent
}
];
