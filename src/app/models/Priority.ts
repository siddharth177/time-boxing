export class Priority {
  public priority: number;
  public index: string
  public id: string;
  public color: string;
  public task: string;
  public status: string;
  public date: Date;

  constructor(priority: number, index: string, color: string, task: string, status: string, date: Date) {
    this.priority = priority;
    this.index = index;
    this.id = this.priority + this.index;
    this.color = color;
    this.task = task;
    this.date = date;
    this.status = status;
  }
}

export enum TaskStatus {
  New= 'New',
  Started = 'Started',
  Completed = 'Completed',
  Deleted = 'Deleted',
}
