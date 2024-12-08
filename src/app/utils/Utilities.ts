import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utilities {
  public getCurrentDateFormatted(): string {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // getMonth() is zero-based
    const day = today.getDate().toString().padStart(2, "0");
    const year = today.getFullYear();

    return `${month}/${day}/${year}`;
  }
}
