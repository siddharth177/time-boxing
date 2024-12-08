import {Component, Input} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatDivider} from '@angular/material/divider';
import {MatFormField, MatHint, MatLabel, MatSuffix} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButton, MatFabButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatTimepicker, MatTimepickerInput, MatTimepickerToggle} from '@angular/material/timepicker';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {MatTooltip} from '@angular/material/tooltip';

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
    MatLabel,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatHint,
    MatSuffix,
    MatTimepickerInput,
    MatTimepicker,
    MatTimepickerToggle,
    MatFabButton,
    MatIcon,
    NgIf,
    MatTooltip
  ],
  templateUrl: './add-priority-dialog.component.html',
  styleUrl: './add-priority-dialog.component.scss'
})
export class AddPriorityDialogComponent {
  task: string = '';
  @Input() _dialogBoxTitle: string = 'Add New Task';
  @Input() _startTime: any;
  constructor(private dialogRef: MatDialogRef<AddTaskDialogComponent>) {}


  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    this.dialogRef.close(this.task);
  }

  saveSchedule() {

  }
}
