export class Priority {
  private priority: number;
  private color: string;
  private task: string;
  private date: Date;

  constructor(priority: number, color: string, task: string, date: Date) {
    this.priority = priority;
    this.color = color;
    this.task = task;
    this.date = date;
  }
}
