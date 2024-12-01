import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrioritiesComponent} from './components/priorities/priorities.component';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrioritiesComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  providers: [
  ]
})
export class AppComponent {
  title = 'time-boxing';
  date = new Date();
}
