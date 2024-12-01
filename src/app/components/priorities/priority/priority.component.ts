import {Component, Input} from '@angular/core';
import {Priority} from '../../../models/Priority';

@Component({
  selector: 'app-priority',
  imports: [],
  templateUrl: './priority.component.html',
  standalone: true,
  styleUrl: './priority.component.scss'
})
export class PriorityComponent {
  @Input() priority: Priority | undefined;
}
