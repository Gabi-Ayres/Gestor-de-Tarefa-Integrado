export class TagService {
  private taskTags: Map<number, string[]>;

  constructor() {
    this.taskTags = new Map();
  }

  addTag(taskId: number, tag: string): void {
    if (!this.taskTags.has(taskId)) {
      this.taskTags.set(taskId, []);
    }

    const tags = this.taskTags.get(taskId)!;

    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  }

  removeTag(taskId: number, tag: string): void {
    const tags = this.taskTags.get(taskId);
    if (!tags) return;

    this.taskTags.set(
      taskId,
      tags.filter(t => t !== tag)
    );
  }

  getTags(taskId: number): string[] {
    return this.taskTags.get(taskId) ?? [];
  }

  getTasksByTag(tag: string): number[] {
    const result: number[] = [];

    for (const [taskId, tags] of this.taskTags.entries()) {
      if (tags.includes(tag)) {
        result.push(taskId);
      }
    }

    return result;
  }
}
