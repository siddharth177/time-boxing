import {Injectable} from '@angular/core';
import {BlockedTime, Priority, TaskStatus} from '../models/Priority';

@Injectable({
  providedIn: 'root'
})
export class DbSimulation {
  _priorities: Array<Priority> = new Array<Priority>(new Priority(1, 'A', 'tasdkfaslkdjf ', 'New', '12082024', new Array<BlockedTime>()));

  public savePriority(priority: Priority) {
    this._priorities.push(priority);
    console.log('priority saved. new List: ' + this._priorities)
  }

  public deletePriority(id: string) {
    this._priorities = this._priorities.filter(p => p.id !== id);
  }

  public getFirstPriorityList(date: string): Array<Priority> {
    return this.getPriorityList(1, date);
  }

  public getSecondPriorityList(date: string): Array<Priority> {
    return this.getPriorityList(2, date);
  }

  public getChoresList(date: string): Array<Priority> {
    return this.getPriorityList(3, date);
  }


  public getPriorityList(priority: any, date: string) {
    // return this.priorities;
    return this._priorities.filter(p => (p.priority === priority && p.dateCreated === date));
  }

  updatePriorities(_priority: number, date: string) {
    this._priorities = this.getPriorityList(_priority, date);

  }

  updatePriority(priority: Priority) {
    const index = this._priorities.findIndex(p => p.id === priority.id)
    if (index !== -1) {
      this._priorities[index] = {...this._priorities[index], task: priority.task}
    }
  }
}
