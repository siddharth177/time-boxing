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
import {BlockedTime, Priority, TaskStatus} from '../../../models/Priority';

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
  @Input() _startDate: Date = new Date();
  @Input() _startTime: string = '';
  @Input() _endDate: Date = new Date();
  @Input() _endTime: string = '';
  @Input() _boxedTimes = new Array<BlockedTime>;
  constructor(private dialogRef: MatDialogRef<AddTaskDialogComponent>) {}


  closeDialog() {
    this.dialogRef.close();
  }

  saveTask() {
    this.dialogRef.close({
      task: this.task,
      blockedTimes: this._boxedTimes
    });
  }

  saveSchedule() {
    const startDateTime = new Date(`${this._startDate} ${this._startTime}`);
    const endDateTime = new Date(`${this._endDate} ${this._endTime}`);

    // Calculate the duration in milliseconds
    const durationMs = endDateTime.getTime() - startDateTime.getTime();
    const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
    const durationMinutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    const boxedTime = {
      startDate: this._startDate,
      startTime: this._startTime,
      endDate: this._endDate,
      endTime: this._endTime,
    };

    this._boxedTimes.push(new BlockedTime(this._startDate, this._startTime, this._endDate, this._endTime));
    // Reset the form fields if needed
    this.resetForm();

  }

  allFieldsFilled() {
    return this._startTime && this._startDate
    && this._endDate && this._endTime;
  }

  resetForm() {
    this._startDate = new Date();
    this._startTime = '';
    this._endDate = new Date();
    this._endTime = '';
  }

}
