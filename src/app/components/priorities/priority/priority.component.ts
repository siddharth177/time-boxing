import {Component, Input} from '@angular/core';
import {Priority, TaskStatus} from '../../../models/Priority';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {PriorityService} from '../../../services/priority.service';
import {MatDialog} from '@angular/material/dialog';
import {AddPriorityComponent} from '../add-priority/add-priority.component';

@Component({
  selector: 'app-priority',
  imports: [
    MatButton,
    MatCheckbox,
    FormsModule,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './priority.component.html',
  standalone: true,
  styleUrl: './priority.component.scss'
})
export class PriorityComponent {
  @Input() priority: Priority = new Priority(1, 'A', '', '', TaskStatus.New, new Date());

  constructor(private priorityService: PriorityService, private dialog: MatDialog) {

  }

  editTask() {
    const dialogRef = this.dialog.open(AddPriorityComponent, {
      data: {
        priority: this.priority,
        index: this.priority.index,
        action: 'Edit Task',
        taskText: this.priority.task
      }
    });
  }

  deleteTask() {

  }
}
