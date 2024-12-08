export class Priority {
  public priority: number;
  public index: string
  public id: string;
  public task: string;
  public status: string;
  public dateCreated: string;
  public blockedTimes: Array<BlockedTime>;

  constructor(priority: number, index: string, task: string, status: string, date: string, blockedTimes: Array<BlockedTime>) {
    this.priority = priority;
    this.index = index;
    this.dateCreated = date;
    this.id = this.dateCreated + this.priority + this.index;
    this.task = task;
    this.status = status;
    this.blockedTimes = blockedTimes;
  }
}

export enum TaskStatus {
  New = 'New',
  Started = 'Started',
  Completed = 'Completed',
  Deleted = 'Deleted',
  Archived = 'Archived'
}

export class BlockedTime {
  public startDate: Date
  public startTime: string;
  public endDate: Date
  public endTime: string;
  public duration: number;
  constructor(startDate:Date, startTime: string, endDate: Date, endTime: string) {
    this.startTime = startTime;
    this.startDate = startDate;
    this.endDate = endDate;
    this.endTime = endTime;
    const startDateTime = new Date(`${this.startDate} ${this.startTime}`);
    const endDateTime = new Date(`${this.endDate} ${this.endTime}`);

    // Calculate the duration in milliseconds
    const durationMs = endDateTime.getTime() - startDateTime.getTime();
    const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
    const durationMinutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    this.duration = durationMinutes;
  }
}
