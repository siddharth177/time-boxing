import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-body',
  imports: [CommonModule],
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.scss'],
})
export class CalendarBodyComponent implements OnInit {
  timeSlots: string[] = [];

  ngOnInit() {
    this.generateTimeSlots();
  }

  generateTimeSlots() {
    const startHour = 0; // Midnight
    const endHour = 24; // End of the day
    const interval = 30; // 30 minutes
    const slots: string[] = [];

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = new Date();
        time.setHours(hour, minute, 0, 0);

        const formattedTime = time.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        slots.push(formattedTime);
      }
    }

    this.timeSlots = slots;
  }
}
