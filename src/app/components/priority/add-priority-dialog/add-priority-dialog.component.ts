import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatDivider} from '@angular/material/divider';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';

class AddTaskDialogComponent {
}

@Component({
  selector: 'app-add-priority-dialog',
  imports: [
    MatDialogTitle,
    MatDivider,
    MatFormField,
    MatDialogContent,
    MatDialogActions,
    FormsModule,
    MatButton,
    MatInput,
    MatLabel
  ],
  templateUrl: './add-priority-dialog.component.html',
  styleUrl: './add-priority-dialog.component.scss'
})
export class AddPriorityDialogComponent {
  task: string = '';
  constructor(private dialogRef: MatDialogRef<AddTaskDialogComponent>) {}


  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    this.dialogRef.close(this.task);
  }
}
