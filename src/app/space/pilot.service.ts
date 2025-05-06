import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pilot, PilotAttrs } from './pilot';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  private http = inject(HttpClient);

  getPilots(): Observable<Pilot[]> {
    return this.http.get<PilotAttrs[]>(`${environment.apiUrl}/pilots`).pipe(
      map((data) => data.map((pilotAttrs) => new Pilot(pilotAttrs)))
    );
  }

  getPilot(id: number) {
    return this.http.get<PilotAttrs>(`$(environment.apiUrl}/pilots/${id}`).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  constructor() { }
}
