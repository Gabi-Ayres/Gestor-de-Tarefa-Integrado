export class DeadlineService {
    constructor() {
        this.deadlines = new Map();
    }
    setDeadline(taskId, date) {
        this.deadlines.set(taskId, date.getTime());
    }
    now() {
        return Date.now();
    }
    isExpired(taskId) {
        const deadline = this.deadlines.get(taskId);
        if (deadline === undefined) {
            return false;
        }
        return deadline < this.now();
    }
    getExpiredTasks() {
        const result = [];
        for (const [taskId, deadline] of this.deadlines.entries()) {
            if (deadline < this.now()) {
                result.push(taskId);
            }
        }
        return result;
    }
}
