export class AssignmentService {
  private taskToUsers: Map<number, Set<number>>;
  private userToTasks: Map<number, Set<number>>;

  constructor() {
    this.taskToUsers = new Map();
    this.userToTasks = new Map();
  }

  assignUser(taskId: number, userId: number): void {
    if (!this.taskToUsers.has(taskId)) {
      this.taskToUsers.set(taskId, new Set());
    }
    this.taskToUsers.get(taskId)!.add(userId);

    if (!this.userToTasks.has(userId)) {
      this.userToTasks.set(userId, new Set());
    }
    this.userToTasks.get(userId)!.add(taskId);
  }

  unassignUser(taskId: number, userId: number): void {
    this.taskToUsers.get(taskId)?.delete(userId);
    this.userToTasks.get(userId)?.delete(taskId);
  }

  getUsersFromTask(taskId: number): number[] {
    return Array.from(this.taskToUsers.get(taskId) ?? []);
  }

  getTasksFromUser(userId: number): number[] {
    return Array.from(this.userToTasks.get(userId) ?? []);
  }
}
