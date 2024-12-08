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
  public startTime: string;
  public duration: number;
  constructor(startTime: string, duration: number) {
    this.startTime = startTime;
    this.duration = duration;
  }
}
