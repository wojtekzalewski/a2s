import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { A2sCommComponent } from 'a2s-comm';
import { HangarComponent } from "./space/hangar/hangar.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [A2sCommComponent, RouterOutlet, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
