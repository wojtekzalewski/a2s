import { Routes } from '@angular/router';
import { HangarComponent } from './space/hangar/hangar.component';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { EngineersRoomComponent } from './space/engineers-room/engineers-room.component';
import { DestructionRoomComponent } from './space/destruction-room/destruction-room.component';

export const routes: Routes = [
{
    path: 'space',
    component: HangarComponent,
    children: [
        {path: 'production', component: EngineersRoomComponent},
        {path: 'destruction', component: DestructionRoomComponent},
        {path: '', redirectTo: 'production', pathMatch: 'full'}
    ]
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
