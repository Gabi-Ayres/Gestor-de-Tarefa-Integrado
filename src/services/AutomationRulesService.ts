import { ITask } from "tasks/ITask.js";
import { TaskStatus } from "tasks/TaskStatus.js"

interface IUser {
  id: number;
  name: string;
  active: boolean;
}

export class RulesService {
  constructor(
    private assignments: Map<number, number[]> // taskId → userIds
  ) {}

  // ---------------------------
  // Regras de tasks
  // ---------------------------

  private ruleCompletedTaskLog(task: ITask) {
    if (task.status === TaskStatus.COMPLETED) {
      console.log(`LOG: Task "${task.title}" (${task.id}) foi concluída.`);
    }
  }

  private ruleBlockedTaskNotify(task: ITask) {
    if (task.status === TaskStatus.BLOCKED) {
      console.log(`NOTIFICAÇÃO: Task "${task.title}" (${task.id}) está bloqueada.`);
    }
  }

  private ruleExpiredTask(task: ITask, now: Date) {
    if (task.dataConclusao && task.dataConclusao < now && task.status !== TaskStatus.COMPLETED) {
      task.moveTo(TaskStatus.BLOCKED);
      console.log(`Task "${task.title}" (${task.id}) expirou e foi movida para BLOCKED.`);
    }
  }

  // aplica todas regras a uma task
  applyRules(task: ITask, now: Date = new Date()) {
    this.ruleCompletedTaskLog(task);
    this.ruleBlockedTaskNotify(task);
    this.ruleExpiredTask(task, now);
  }

  // ---------------------------
  // Regras de users
  // ---------------------------

  private ruleInactiveUserAssignments(user: IUser) {
    if (!user.active) {
      // remove todas atribuições do user
      for (const [taskId, userIds] of this.assignments.entries()) {
        this.assignments.set(taskId, userIds.filter(id => id !== user.id));
      }
      console.log(`User "${user.name}" (${user.id}) está inativo. Assignments removidos.`);
    }
  }

  // aplica regras a um usuário
  applyUserRules(user: IUser) {
    this.ruleInactiveUserAssignments(user);
  }
}
