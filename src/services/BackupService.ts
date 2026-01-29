import { ITask } from "tasks/ITask.js";

export class BackupService {
  constructor(
    private users: number[],
    private tasks: ITask[],
    private assignments: Map<number, number[]> 
  ) {}

  // retorna cópia da lista de usuários
  exportUsers(): number[] {
    return [...this.users]; 
  }

  // retorna cópia da lista de tasks
  exportTasks(): ITask[] {
    return this.tasks.map(task => ({ ...task })); 
  }

  // retorna cópia das atribuições
  exportAssignments(): Map<number, number[]> {
    const copy = new Map<number, number[]>();
    for (const [taskId, userIds] of this.assignments.entries()) {
      copy.set(taskId, [...userIds]); 
    }
    return copy;
  }

  // retorna tudo junto
  exportAll() {
    return {
      users: this.exportUsers(),
      tasks: this.exportTasks(),
      assignments: this.exportAssignments(),
    };
  }
}
