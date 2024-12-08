import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calendar-header',
  imports: [CommonModule, MatCardModule],
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.scss'
})
export class CalendarHeaderComponent {
  currentDate: Date = new Date();
  
  navigateToPreviousDay(): void {
    this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - 1));
  }

  navigateToToday(): void {
    this.currentDate = new Date(); // Reset to today's date
  }

  navigateToNextDay(): void {
    this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 1));
  }
}
