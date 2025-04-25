import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A2sCommComponent } from 'a2s-comm';

@Component({
  selector: 'app-root',
  imports: [A2sCommComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
