import { TaskPriority } from "tasks/TaskPriority.js";
export class PriorityService {
    constructor() {
        this.taskPriority = new Map();
    }
    setPriority(taskId, priority) {
        this.taskPriority.set(taskId, priority);
    }
    getPriority(taskId) {
        return this.taskPriority.get(taskId);
    }
    getHighPriorityTasks() {
        const result = [];
        for (const [taskId, priority] of this.taskPriority.entries()) {
            if (priority === TaskPriority.HIGH ||
                priority === TaskPriority.CRITICAL) {
                result.push(taskId);
            }
        }
        return result;
    }
}
