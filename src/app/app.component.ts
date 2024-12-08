import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PriorityCardComponent} from './components/priority/priority-card/priority-card.component';
import {Priority} from './models/Priority';
import {DbSimulation} from './services/dbSimulation';
import {Utilities} from './utils/Utilities';
import {CdkListbox} from '@angular/cdk/listbox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PriorityCardComponent, CdkListbox],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  providers: [
  ]
})
export class AppComponent {
  title = 'time-boxing';
}
