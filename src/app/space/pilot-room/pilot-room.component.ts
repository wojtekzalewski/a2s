import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotComponent } from '../pilot/pilot.component';
import { PilotService } from '../pilot.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pilot-room',
  imports: [PilotComponent, RouterLink],
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  private pilotService = inject(PilotService);
  @Output() selected = new EventEmitter<Pilot | null>();
  pilots: Pilot[] = [];
  selectedPilot: Pilot | null = null;

  ngOnInit() {
    this.pilotService.getPilots().subscribe({
      next: (pilots) => this.pilots = pilots,
      error: () => alert('Nie udało się pobrać pilotów')
    });
  }

  select(pilot: Pilot | null): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  removePilot(pilot: Pilot): void {
    const index = this.pilots.indexOf(pilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  addPilot(pilot: Pilot): void {
    this.pilots.push(pilot);
  }

}
