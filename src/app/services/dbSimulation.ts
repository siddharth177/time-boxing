import {Injectable} from '@angular/core';
import {Priority} from '../models/Priority';

@Injectable({
  providedIn: 'root'
})
export class DbSimulation {
  priorities: Array<Priority> = new Array<Priority>();

  public savePriority(priority: Priority) {
    this.priorities.push(priority);
  }

  public deletePriority(id: string) {
    this.priorities = this.priorities.filter(p => p.id !== id);
  }

  public getFirstPriorityList(date: Date): Array<Priority> {
    return this.getPriorityList(1, date);
  }

  public getSecondPriorityList(date: Date): Array<Priority> {
    return this.getPriorityList(2, date);
  }

  public getChoresList(date: Date): Array<Priority> {
    return this.getPriorityList(3, date);
  }


  public getPriorityList(priority: any, date: Date) {
    return this.priorities.filter(p => (p.priority === priority && p.date === date));
  }
}
