import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarModule, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calender-header',
  imports: [CalendarModule],
  standalone: true,
  templateUrl: './calender-header.component.html',
  styleUrl: './calender-header.component.scss',
})
export class CalenderHeaderComponent {
  @Input() view!: CalendarView;

  @Input() viewDate!: Date;

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;
}
