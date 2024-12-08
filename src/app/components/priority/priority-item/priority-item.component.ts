import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatLine} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {BlockedTime, Priority, TaskStatus} from '../../../models/Priority';
import {DbSimulation} from '../../../services/dbSimulation';
import {Utilities} from '../../../utils/Utilities';
import {MatCardContent} from '@angular/material/card';
import {NgIf} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-priority-item',
  imports: [
    MatCheckbox,
    MatIcon,
    MatIconButton,
    MatLine,
    FormsModule,
    MatCardContent,
    NgIf
  ],
  templateUrl: './priority-item.component.html',
  styleUrl: './priority-item.component.scss'
})
export class PriorityItemComponent {
  @Input() _priority: Priority = new Priority(1, '', '', '', '', new Array<BlockedTime>());
  @Output() taskDeleted = new EventEmitter<Priority>();
  @Output() taskUpdated = new EventEmitter<Priority>();

  constructor(private dialog: MatDialog) {}


  isEditing: boolean = false; // Flag to toggle edit mode

  editTask() {
    this.isEditing = true; // Enter edit mode
  }

  saveTask() {
    this.isEditing = false; // Exit edit mode
    this.taskUpdated.emit(this._priority);
    // Optionally emit an event or call a service to save the updated task
  }

  cancelEdit() {
    this.isEditing = false; // Exit edit mode without saving
    // Optionally reset the input to its original value if needed
  }

  get isCompleted() : boolean {
    return this._priority.status === TaskStatus.Completed;
  }

  set isCompleted(value: boolean) {
    this._priority.status = value ? TaskStatus.Completed : TaskStatus.New;
  }

  updateTask(priority: Priority) {
    console.log(`${this._priority.task} status updated to: ${this._priority.status}`);

  }

  deleteTask(priority: Priority) {
    this.taskDeleted.emit(this._priority);
  }

  editPriority() {

  }
}
