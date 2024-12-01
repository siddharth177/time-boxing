export class Priority {
  public priority: number;
  public index: string
  public id: string;
  public color: string;
  public task: string;
  public date: Date;

  constructor(priority: number, index: string, color: string, task: string, date: Date) {
    this.priority = priority;
    this.index = index;
    this.id = this.priority + this.index;
    this.color = color;
    this.task = task;
    this.date = date;
  }
}
