export class Comment {
    constructor(id, taskId, userId, message, createdAt) {
        this.id = id;
        this.taskId = taskId;
        this.userId = userId;
        this.message = message;
        this.createdAt = createdAt;
    }
}
