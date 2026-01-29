export class AssignmentService {
    constructor() {
        this.taskToUsers = new Map();
        this.userToTasks = new Map();
    }
    assignUser(taskId, userId) {
        if (!this.taskToUsers.has(taskId)) {
            this.taskToUsers.set(taskId, new Set());
        }
        this.taskToUsers.get(taskId).add(userId);
        if (!this.userToTasks.has(userId)) {
            this.userToTasks.set(userId, new Set());
        }
        this.userToTasks.get(userId).add(taskId);
    }
    unassignUser(taskId, userId) {
        var _a, _b;
        (_a = this.taskToUsers.get(taskId)) === null || _a === void 0 ? void 0 : _a.delete(userId);
        (_b = this.userToTasks.get(userId)) === null || _b === void 0 ? void 0 : _b.delete(taskId);
    }
    getUsersFromTask(taskId) {
        var _a;
        return Array.from((_a = this.taskToUsers.get(taskId)) !== null && _a !== void 0 ? _a : []);
    }
    getTasksFromUser(userId) {
        var _a;
        return Array.from((_a = this.userToTasks.get(userId)) !== null && _a !== void 0 ? _a : []);
    }
}
