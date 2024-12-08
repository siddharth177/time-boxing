import {Component, Input, numberAttribute, OnInit} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Priority, TaskStatus} from '../../models/Priority';
import {NgForOf, NgIf} from '@angular/common';
import {PriorityComponent} from './priority/priority.component';
import {PriorityService} from '../../services/priority.service';
import {MatDialog} from '@angular/material/dialog';
import {AddPriorityComponent} from './add-priority/add-priority.component';

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
    PriorityComponent,
    NgIf,
    MatCardTitleGroup
  ],
  templateUrl: './priorities.component.html',
  standalone: true,
  styleUrl: './priorities.component.scss'
})
export class PrioritiesComponent implements OnInit{
  @Input() priority: number = 1;
  @Input() priorityTitle = 'First priority';
  @Input() date: Date = new Date();
  @Input() priorities: Array<Priority> = new Array<Priority>();
  @Input({transform: numberAttribute}) maxTasks: number = 3;

  constructor(private priorityService: PriorityService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    // this.priorities = this.priorityService.getPriorities();
    this.priorities.push(new Priority(1, 'A', 'red', 'Get this done', TaskStatus.New, new Date())) ;
  }

  openTaskPopup() {
    const dialogRef = this.dialog.open(AddPriorityComponent, {
      data: {
        priority: this.priority,
        index: this.priorities.length
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.priorities.push(result);
        this.priorityService.savePriority(result).subscribe(
          {
            complete:() => console.log('Priority is saved'),
            error:() => console.error('Failed to save priority')
          }
        )
      }
    })
  }
}
