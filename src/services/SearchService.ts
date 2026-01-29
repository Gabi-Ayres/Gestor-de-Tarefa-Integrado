import { ITask } from "tasks/ITask.js";
import { TaskStatus } from "tasks/TaskStatus.js"; 

export class SearchService {
  constructor(private tasks: ITask[]) {}

  searchByTitle(text: string): ITask[] {
    const lowerText = text.toLowerCase();
    return this.tasks.filter(task =>
      task.title.toLowerCase().includes(lowerText)
    );
  }

  searchByUser(userId: number): ITask[] {
    return this.tasks.filter(task => task.assignedTo === userId);
  }

  searchByStatus(status: TaskStatus): ITask[] {
    return this.tasks.filter(task => task.status === status);
  }

  globalSearch(query: { text?: string; userId?: number; status?: TaskStatus }): ITask[] {
    const results: ITask[] = [];

    if (query.text) {
      results.push(...this.searchByTitle(query.text));
    }

    if (query.userId !== undefined) {
      results.push(...this.searchByUser(query.userId));
    }

    if (query.status) {
      results.push(...this.searchByStatus(query.status));
    }

    // remover duplicados pelo id da task
    const uniqueMap = new Map<number, ITask>();
    for (const task of results) {
      uniqueMap.set(task.id, task);
    }

    return Array.from(uniqueMap.values());
  }
}
