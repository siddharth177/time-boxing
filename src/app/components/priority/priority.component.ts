import {Component, Input, numberAttribute, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Priority} from '../../models/Priority';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-priority',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardActions,
    MatCardHeader,
    MatButton,
    MatCardContent,
    NgForOf
  ],
  templateUrl: './priority.component.html',
  standalone: true,
  styleUrl: './priority.component.scss'
})
export class PriorityComponent implements OnInit{
  @Input() priorityTitle = 'First priority';
  @Input() priorities: Array<Priority> = new Array<Priority>();
  @Input({transform: numberAttribute}) maxTasks: number = 3;

  openTaskPopup() {

  }

  ngOnInit(): void {
    this.priorities.push(new Priority(1, 'A', 'red', 'Get this done', new Date())) ;
  }
}
