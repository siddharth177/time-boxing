import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Priority} from '../models/Priority';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private http: HttpClient) { }

  public getPriorities() {
    return new Array<Priority>;
  }

  public savePriority(priority: Priority): Observable<any> {
    return new Observable();
  }
}
