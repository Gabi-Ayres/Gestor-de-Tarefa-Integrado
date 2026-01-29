import { TaskStatus } from "tasks/TaskStatus.js";
export class RulesService {
    constructor(assignments // taskId → userIds
    ) {
        this.assignments = assignments;
    }
    // ---------------------------
    // Regras de tasks
    // ---------------------------
    ruleCompletedTaskLog(task) {
        if (task.status === TaskStatus.COMPLETED) {
            console.log(`LOG: Task "${task.title}" (${task.id}) foi concluída.`);
        }
    }
    ruleBlockedTaskNotify(task) {
        if (task.status === TaskStatus.BLOCKED) {
            console.log(`NOTIFICAÇÃO: Task "${task.title}" (${task.id}) está bloqueada.`);
        }
    }
    ruleExpiredTask(task, now) {
        if (task.dataConclusao && task.dataConclusao < now && task.status !== TaskStatus.COMPLETED) {
            task.moveTo(TaskStatus.BLOCKED);
            console.log(`Task "${task.title}" (${task.id}) expirou e foi movida para BLOCKED.`);
        }
    }
    // aplica todas regras a uma task
    applyRules(task, now = new Date()) {
        this.ruleCompletedTaskLog(task);
        this.ruleBlockedTaskNotify(task);
        this.ruleExpiredTask(task, now);
    }
    // ---------------------------
    // Regras de users
    // ---------------------------
    ruleInactiveUserAssignments(user) {
        if (!user.active) {
            // remove todas atribuições do user
            for (const [taskId, userIds] of this.assignments.entries()) {
                this.assignments.set(taskId, userIds.filter(id => id !== user.id));
            }
            console.log(`User "${user.name}" (${user.id}) está inativo. Assignments removidos.`);
        }
    }
    // aplica regras a um usuário
    applyUserRules(user) {
        this.ruleInactiveUserAssignments(user);
    }
}
