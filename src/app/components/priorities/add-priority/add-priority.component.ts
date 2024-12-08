import {Component, Inject, input, Input} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {Priority, TaskStatus} from '../../../models/Priority';

@Component({
  selector: 'app-add-priority',
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatLabel,
    MatFormField,
    FormsModule,
    MatButton,
    MatDialogClose,
    MatInput,
    MatDialogTitle
  ],
  templateUrl: './add-priority.component.html',
  standalone: true,
  styleUrl: './add-priority.component.scss'
})
export class AddPriorityComponent {
  @Input() priority: number = 1;
  @Input() index: string = 'A';
  @Input() action: string = 'Add Task'

  taskText: string = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddPriorityComponent>) {
    this.priority = data.priority
    this.index = (data.index + 9).toString(36).toUpperCase()
    this.action = data.action
    if(this.action == 'Edit Task') {
      this.taskText = data.taskText
    }
  }

  // Save the task and close the dialog
  saveTask(): void {
    if (this.taskText.trim()) {
      this.dialogRef.close(new Priority(this.priority, this.index, "", this.taskText,  TaskStatus.New, new Date()));
    }
  }
}
