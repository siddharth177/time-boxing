import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utilities {
  public getFormattedDate(date: Date): string {
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() is zero-based
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  public getCurrentDate() {
    return this.getFormattedDate(new Date());
  }

  getPriorityTitle(priority: number) {
    if(priority === 1)
      return 'First Priorities'
    if(priority === 2)
      return 'Second Priorities'
    if(priority === 3)
      return 'Chores/Must do'
    return '';
  }
}
