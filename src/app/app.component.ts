import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PriorityComponent} from './components/priority/priority.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PriorityComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'time-boxing';
}
