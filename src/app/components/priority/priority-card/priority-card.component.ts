import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {MatList, MatListItem} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatLine} from '@angular/material/core';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {NgForOf, NgIf} from '@angular/common';
import {BlockedTime, Priority, TaskStatus} from '../../../models/Priority';
import {MatDialog} from '@angular/material/dialog';
import {AddPriorityDialogComponent} from '../add-priority-dialog/add-priority-dialog.component';
import {DbSimulation} from '../../../services/dbSimulation';
import {Utilities} from '../../../utils/Utilities';
import {MatCheckbox} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PriorityItemComponent} from '../priority-item/priority-item.component';

@Component({
  selector: 'app-priority-card',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatDivider,
    MatListItem,
    MatList,
    MatIcon,
    MatLine,
    MatIconButton,
    NgIf,
    NgForOf,
    MatFabButton,
    MatCheckbox,
    FormsModule,
    ReactiveFormsModule,
    PriorityItemComponent
  ],
  templateUrl: './priority-card.component.html',
  styleUrl: './priority-card.component.scss'
})
export class PriorityCardComponent implements OnInit{
  @Input() public _priorities: Array<Priority> = new Array<Priority>();
  @Input() public _maxPriorities: number = 3;
  @Input() public _priority: number = 1;
  @Input() public _priorityTitle: string = '';

  constructor(private dialog: MatDialog, private dbSimulation: DbSimulation, private util: Utilities) {}
  ngOnInit(): void {
    this._priorities = this.dbSimulation.getPriorityList(this._priority, this.util.getCurrentDate())
    this._priorityTitle = this.util.getPriorityTitle(this._priority);
    console.log('loaded ' + this._priorityTitle + ' : ' + this._priorities);
  }

  addTask() {
    const dialogRef = this.dialog.open(AddPriorityDialogComponent, {
      width: '100%', // Set to 100% to match the card's dynamic size
      maxWidth: '50vw', // Set an upper limit to prevent excessive width
      maxHeight: '70vh',
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(result);
        this.dbSimulation.savePriority(new Priority(this._priority, this.util.getPriorityIndex(this._priorities.length), result.task, TaskStatus.New, this.util.getCurrentDate(), result.blockedTimes));
        this._priorities = this.dbSimulation.getPriorityList(this._priority, this.util.getCurrentDate())
        console.log(result + ' task is saved');
      }
    });
  }


  deleteTask(priority: Priority) {
    this.dbSimulation.deletePriority(priority.id);
    this._priorities = this.dbSimulation.getPriorityList(this._priority, this.util.getCurrentDate());
  }

  updateTask(priority: Priority) {
    this.dbSimulation.updatePriority(priority);
    this._priorities = this.dbSimulation.getPriorityList(this._priority, this.util.getCurrentDate());
  }
}
