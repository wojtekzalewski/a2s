import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A2sCommComponent } from 'a2s-comm';
import { HangarComponent } from "./space/hangar/hangar.component";

@Component({
  selector: 'app-root',
  imports: [A2sCommComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
