import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calendar-header',
  imports: [CommonModule, MatCardModule],
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.scss',
})
export class CalendarHeaderComponent {
  @Input() selectedDate: Date = new Date();

  @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();

  navigateToPreviousDay(): void {
    this.selectedDate = new Date(
      this.selectedDate.setDate(this.selectedDate.getDate() - 1)
    );
    this.dateChange.emit(this.selectedDate);
  }

  navigateToToday(): void {
    this.selectedDate = new Date(); // Reset to today's date
    this.dateChange.emit(this.selectedDate);
  }

  navigateToNextDay(): void {
    this.selectedDate = new Date(
      this.selectedDate.setDate(this.selectedDate.getDate() + 1)
    );
    this.dateChange.emit(this.selectedDate);
  }
}
