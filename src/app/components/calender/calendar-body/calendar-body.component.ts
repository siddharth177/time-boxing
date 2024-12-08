import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-calendar-body',
  imports: [CommonModule],
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.scss'],
})
export class CalendarBodyComponent implements OnInit, AfterViewInit {
  timeSlots: string[] = [];
  flooredCurrentTime: string = '';
  highlightedIndex: number = 0;
  slotHeight: number = 40; // default

  @ViewChild('calendarBody', { static: false }) calendarBody:
    | ElementRef
    | undefined;

  ngOnInit() {
    this.generateTimeSlots();
    this.floorCurrentTime();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.calendarBody) {
        this.getSlotHeightFromCSS();
        this.scrollToHighlightedSlot();
      }
    }, 100); // Slight delay to ensure DOM is fully rendered
  }

  // Generate time slots for the day in 30-minute intervals
  generateTimeSlots() {
    const startHour = 0;
    const endHour = 24;
    const interval = 30; // 30-minute intervals
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

  // Floor the current time to the nearest 30-minute mark
  floorCurrentTime() {
    const now = new Date();
    const minutes = now.getMinutes();
    const flooredMinutes = Math.floor(minutes / 30) * 30;

    now.setMinutes(flooredMinutes, 0, 0); // Set to nearest 30 minutes mark
    this.flooredCurrentTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    // Find the index of the floored current time in the time slots
    this.highlightedIndex = this.timeSlots.findIndex(
      (time) => time === this.flooredCurrentTime
    );
  }

  // Check if the current time matches a time slot
  isCurrentTime(time: string): boolean {
    return time === this.flooredCurrentTime;
  }
  getSlotHeightFromCSS() {
    if (typeof window === 'undefined') {
      this.slotHeight = 40;
      return;
    }
    const computedStyle = window.getComputedStyle(document.documentElement);
    const slotHeight = computedStyle.getPropertyValue('--slot-height');
    this.slotHeight = parseInt(slotHeight, 10) || 40; // Default to 40px if undefined
  }

  // Scroll the time slots so that the highlighted time slot is centered
  scrollToHighlightedSlot() {
    if (this.calendarBody && this.highlightedIndex >= 0) {
      const containerHeight = this.calendarBody.nativeElement.offsetHeight;
      const scrollPosition =
        this.highlightedIndex * this.slotHeight -
        containerHeight / 2 +
        this.slotHeight / 2;
        
      this.calendarBody.nativeElement.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }
}
