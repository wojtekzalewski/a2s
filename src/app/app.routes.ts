import { Routes } from '@angular/router';
import { HangarComponent } from './space/hangar/hangar.component';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { EngineersRoomComponent } from './space/engineers-room/engineers-room.component';
import { DestructionRoomComponent } from './space/destruction-room/destruction-room.component';
import { destructionGuard } from './space/destruction.guard';
import { pilotResolver } from './space/pilot.resolver';

export const routes: Routes = [
{
    path: 'space',
    component: HangarComponent,
    children: [
        {path: 'production', component: EngineersRoomComponent},
        {path: 'destruction', component: DestructionRoomComponent, canActivate: [destructionGuard]},
        {path: '', redirectTo: 'production', pathMatch: 'full'}
    ]
},
{
    path: 'space/pilots/:id',
    loadComponent: () => import ('./space/pilot-form/pilot-form.component').then(m => m.PilotFormComponent),
    resolve: {pilot: pilotResolver}
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
