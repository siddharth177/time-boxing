import {Component, Input, numberAttribute} from '@angular/core';
import {MatCard, MatCardActions, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Priority} from '../../models/Priority';

@Component({
  selector: 'app-priority',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardActions,
    MatCardHeader,
    MatButton
  ],
  templateUrl: './priority.component.html',
  standalone: true,
  styleUrl: './priority.component.scss'
})
export class PriorityComponent {
  @Input() priorityTitle = 'First priority';
  @Input() priorities: Array<Priority> = new Array<Priority>();
  @Input({transform: numberAttribute}) maxTasks: number = 3;

  openTaskPopup() {

  }
}
