import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatLine} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {Priority, TaskStatus} from '../../../models/Priority';
import {DbSimulation} from '../../../services/dbSimulation';
import {Utilities} from '../../../utils/Utilities';
import {MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-priority-item',
  imports: [
    MatCheckbox,
    MatIcon,
    MatIconButton,
    MatLine,
    FormsModule,
    MatCardContent
  ],
  templateUrl: './priority-item.component.html',
  styleUrl: './priority-item.component.scss'
})
export class PriorityItemComponent {
  @Input() _priority: Priority = new Priority(1, '', '', '', '');
  @Output() taskDeleted = new EventEmitter<Priority>();

  get isCompleted() : boolean {
    return this._priority.status === TaskStatus.Completed;
  }

  set isCompleted(value: boolean) {
    this._priority.status = value ? TaskStatus.Completed : TaskStatus.New;
  }

  constructor(private dbSimulation: DbSimulation, private util: Utilities) {
  }

  updateTask(priority: Priority) {
    console.log(`${this._priority.task} status updated to: ${this._priority.status}`);

  }

  deleteTask(priority: Priority) {
    this.taskDeleted.emit(this._priority);
  }

  editTask(priority: Priority) {

  }
}
