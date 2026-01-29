export class BackupService {
    constructor(users, tasks, assignments) {
        this.users = users;
        this.tasks = tasks;
        this.assignments = assignments;
    }
    // retorna cópia da lista de usuários
    exportUsers() {
        return [...this.users];
    }
    // retorna cópia da lista de tasks
    exportTasks() {
        return this.tasks.map(task => (Object.assign({}, task)));
    }
    // retorna cópia das atribuições
    exportAssignments() {
        const copy = new Map();
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
