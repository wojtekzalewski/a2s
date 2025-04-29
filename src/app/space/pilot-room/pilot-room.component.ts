import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  imports: [],
  templateUrl: './pilot-room.component.html',
  styleUrl: './pilot-room.component.css'
})
export class PilotRoomComponent implements OnInit {
pilots: Pilot[] = [];
ngOnInit(): void {
  this.pilots.push(new Pilot('Sharon Valeri', '/assets/valaeri.png'));
  this.pilots.push(new Pilot ('Karl Agathon'));
}
}
