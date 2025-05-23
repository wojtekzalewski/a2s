import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Pilot, PilotAttrs } from './pilot';

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
    return this.http.get<PilotAttrs>(`${environment.apiUrl}/pilots/${id}`).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  savePilot(pilotAttrs: PilotAttrs): Observable<Pilot> {
    if (pilotAttrs.id) {
      return this.updatePilot(pilotAttrs);
    } else {
      return this.createPilot(pilotAttrs);
    }
  }

  private updatePilot(data: PilotAttrs): Observable<Pilot> {
    return this.http.put<PilotAttrs>(`${environment.apiUrl}/pilots/${data.id}`, data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  private createPilot(data: PilotAttrs): Observable<Pilot> {
    return this.http.post<PilotAttrs>(`${environment.apiUrl}/pilots`, data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }
}
