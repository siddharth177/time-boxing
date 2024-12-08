export class Priority {
  public priority: number;
  public index: string
  public id: string;
  public color: string;
  public task: string;
  public status: string;
  public date: string;

  constructor(priority: number, index: string, color: string, task: string, status: string, date: string) {
    this.priority = priority;
    this.index = index;
    this.date = date;
    this.id = this.date + this.priority + this.index;
    this.color = color;
    this.task = task;
    this.status = status;
  }
}

export enum TaskStatus {
  New = 'New',
  Started = 'Started',
  Completed = 'Completed',
  Deleted = 'Deleted',
  Archived = 'Archived'
}
