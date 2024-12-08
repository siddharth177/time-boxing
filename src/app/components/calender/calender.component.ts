import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarBodyComponent } from './calendar-body/calendar-body.component';

@Component({
  selector: 'app-calender',
  imports: [
    CalendarHeaderComponent,
    CommonModule,
    CalendarModule,
    CalendarBodyComponent,
  ],
  standalone: true,
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss',
})
export class CalenderComponent {
  selectedDate: Date = new Date();
  onDateChange(newDate: Date) {
    this.selectedDate = newDate;
  }
}
