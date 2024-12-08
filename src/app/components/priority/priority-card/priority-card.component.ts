import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {MatList, MatListItem} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatLine} from '@angular/material/core';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {NgForOf, NgIf} from '@angular/common';
import {Priority} from '../../../models/Priority';
import {MatDialog} from '@angular/material/dialog';
import {AddPriorityDialogComponent} from '../add-priority-dialog/add-priority-dialog.component';
import {DbSimulation} from '../../../services/dbSimulation';
import {Utilities} from '../../../utils/Utilities';

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
    MatFabButton
  ],
  templateUrl: './priority-card.component.html',
  styleUrl: './priority-card.component.scss'
})
export class PriorityCardComponent implements OnInit{
  @Input() public _priorities: Array<Priority> = new Array<Priority>();
  @Input() public _maxPriorities: number = 3;
  @Input() public _priority: number = 1;

  constructor(private dialog: MatDialog, private dbSimulation: DbSimulation, private util: Utilities) {}
  ngOnInit(): void {
    this._priorities = this.dbSimulation.getPriorityList(this._priority, this.util.getCurrentDate())
    console.log(this._priorities);
  }

  completeTask(priority: Priority) {

  }

  addTask() {
    const dialogRef = this.dialog.open(AddPriorityDialogComponent, {
      width: '100%', // Set to 100% to match the card's dynamic size
      maxWidth: '400px', // Set an upper limit to prevent excessive width
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.dbSimulation.savePriority(new Priority(this._priority, 'A', 'red', result, 'New', this.util.getCurrentDate()));
      }
    });

    this._priorities = this.dbSimulation.getPriorityList(1, this.util.getCurrentDate())
  }

  deleteTask(priority: Priority) {

  }

  editTask(priority: Priority) {

  }
}
