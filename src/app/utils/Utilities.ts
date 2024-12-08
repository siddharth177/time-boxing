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
}
