import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';
import { CalenderHeaderComponent } from '../calender-header/calender-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calender',
  imports: [CalenderHeaderComponent,CommonModule,CalendarModule],
  standalone: true,
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalenderComponent {
  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 3),
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5),
      color: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
      },
    },
  ];
}
