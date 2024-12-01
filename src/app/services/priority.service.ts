import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Priority} from '../models/Priority';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private http: HttpClient) { }

  public getPriorities() {
    return new Array<Priority>;
  }
}
