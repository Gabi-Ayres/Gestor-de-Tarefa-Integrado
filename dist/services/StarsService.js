import { TaskStatus } from "tasks";
export class StatsService {
    constructor(users, tasks) {
        this.users = users;
        this.tasks = tasks;
    }
    // total de utilizadores
    countUsers() {
        return this.users.length;
    }
    // total de tarefas
    countTasks() {
        return this.tasks.length;
    }
    // tarefas concluídas
    countCompletedTasks() {
        return this.tasks.filter(task => task.status === TaskStatus.COMPLETED).length;
    }
    // tarefas ativas (não concluídas nem arquivadas)
    countActiveTasks() {
        return this.tasks.filter(task => task.status !== TaskStatus.COMPLETED && task.status !== TaskStatus.ARCHIVED).length;
    }
    // agrupar tarefas por status
    tasksByStatus() {
        const result = {};
        for (const status in TaskStatus) {
            if (isNaN(Number(status))) {
                result[TaskStatus[status]] = [];
            }
        }
        // preenche
        for (const task of this.tasks) {
            result[task.status].push(task);
        }
        return result;
    }
}
