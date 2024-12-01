import {Component, Input, numberAttribute, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Priority} from '../../models/Priority';
import {NgForOf} from '@angular/common';
import {PriorityComponent} from './priority/priority.component';
import {PriorityService} from '../../services/priority.service';

@Component({
  selector: 'app-priorities',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardActions,
    MatCardHeader,
    MatButton,
    MatCardContent,
    NgForOf,
    PriorityComponent
  ],
  templateUrl: './priorities.component.html',
  standalone: true,
  styleUrl: './priorities.component.scss'
})
export class PrioritiesComponent implements OnInit{
  @Input() priorityTitle = 'First priority';
  @Input() date: Date = new Date();
  @Input() priorities: Array<Priority> = new Array<Priority>();
  @Input({transform: numberAttribute}) maxTasks: number = 3;

  constructor(private priorityService: PriorityService) {

  }

  openTaskPopup() {

  }

  ngOnInit(): void {
    // this.priorities = this.priorityService.getPriorities();
    this.priorities.push(new Priority(1, 'A', 'red', 'Get this done', new Date())) ;
  }
}
