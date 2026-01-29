
import { Comment } from "tasks/Commet.js";

export class CommentService {
  private comments: Comment[] = [];
  private nextId = 1;

  addComment(taskId: number, userId: number, message: string): Comment {
    const comment = new Comment(
      this.nextId++,
      taskId,
      userId,
      message,
      new Date()
    );

    this.comments.push(comment);
    return comment;
  }

  getComments(taskId: number): Comment[] {
    return this.comments.filter(
      comment => comment.taskId === taskId
    );
  }

  deleteComment(commentId: number): void {
    this.comments = this.comments.filter(
      comment => comment.id !== commentId
    );
  }
}
