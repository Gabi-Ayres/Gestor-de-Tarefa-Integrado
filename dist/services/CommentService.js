import { Comment } from "tasks/Commet.js";
export class CommentService {
    constructor() {
        this.comments = [];
        this.nextId = 1;
    }
    addComment(taskId, userId, message) {
        const comment = new Comment(this.nextId++, taskId, userId, message, new Date());
        this.comments.push(comment);
        return comment;
    }
    getComments(taskId) {
        return this.comments.filter(comment => comment.taskId === taskId);
    }
    deleteComment(commentId) {
        this.comments = this.comments.filter(comment => comment.id !== commentId);
    }
}
