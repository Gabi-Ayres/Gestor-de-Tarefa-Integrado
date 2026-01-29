import { TaskPriority } from "tasks/TaskPriority.js"

export class PriorityService {
  private taskPriority: Map<number, TaskPriority>;

  constructor() {
    this.taskPriority = new Map();
  }

  setPriority(taskId: number, priority: TaskPriority): void {
    this.taskPriority.set(taskId, priority);
  }

  getPriority(taskId: number): TaskPriority | undefined {
    return this.taskPriority.get(taskId);
  }

  getHighPriorityTasks(): number[] {
    const result: number[] = [];

    for (const [taskId, priority] of this.taskPriority.entries()) {
      if (
        priority === TaskPriority.HIGH ||
        priority === TaskPriority.CRITICAL
      ) {
        result.push(taskId);
      }
    }

    return result;
  }
}




