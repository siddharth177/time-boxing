export class Priority {
  private priority: number;
  private index: string
  private id: string;
  private color: string;
  private task: string;
  private date: Date;

  constructor(priority: number, index: string, color: string, task: string, date: Date) {
    this.priority = priority;
    this.index = index;
    this.id = this.priority + this.index;
    this.color = color;
    this.task = task;
    this.date = date;
  }
}
