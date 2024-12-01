export class Priority {
  private priority: number;
  private index: string
  private color: string;
  private task: string;
  private date: Date;

  constructor(priority: number, index: string, color: string, task: string, date: Date) {
    this.priority = priority;
    this.index = index;
    this.color = color;
    this.task = task;
    this.date = date;
  }
}
