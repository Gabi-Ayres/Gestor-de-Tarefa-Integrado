export class DeadlineService {
  private deadlines: Map<number, number>;

  constructor() {
    this.deadlines = new Map();
  }

  setDeadline(taskId: number, date: Date): void {
    this.deadlines.set(taskId, date.getTime());
  }

  private now(): number {
    return Date.now();
  }

  isExpired(taskId: number): boolean {
    const deadline = this.deadlines.get(taskId);

    if (deadline === undefined) {
      return false;
    }

    return deadline < this.now();
  }

  getExpiredTasks(): number[] {
    const result: number[] = [];

    for (const [taskId, deadline] of this.deadlines.entries()) {
      if (deadline < this.now()) {
        result.push(taskId);
      }
    }

    return result;
  }
}


