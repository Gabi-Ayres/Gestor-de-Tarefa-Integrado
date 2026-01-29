import { ITask } from "tasks/ITask.js"; 
import { TaskStatus } from "tasks/TaskStatus.js";

export class StatsService {
  constructor(private users: number[], private tasks: ITask[]) {}

  // total de utilizadores
  countUsers(): number {
    return this.users.length;
  }

  // total de tarefas
  countTasks(): number {
    return this.tasks.length;
  }

  // tarefas concluídas
  countCompletedTasks(): number {
    return this.tasks.filter(task => task.status === TaskStatus.COMPLETED).length;
  }

  // tarefas ativas (não concluídas nem arquivadas)
  countActiveTasks(): number {
    return this.tasks.filter(
      task => task.status !== TaskStatus.COMPLETED && task.status !== TaskStatus.ARCHIVED
    ).length;
  }

  // agrupar tarefas por status
  tasksByStatus(): Record<TaskStatus, ITask[]> {
    const result: Record<TaskStatus, ITask[]> = {} as Record<TaskStatus, ITask[]>;

  for (const status in TaskStatus) {
  if (isNaN(Number(status))) { 
    result[TaskStatus[status as keyof typeof TaskStatus]] = [];
  }
}

    // preenche
    for (const task of this.tasks) {
      result[task.status].push(task);
    }

    return result;
  }
}
