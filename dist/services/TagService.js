export class TagService {
    constructor() {
        this.taskTags = new Map();
    }
    addTag(taskId, tag) {
        if (!this.taskTags.has(taskId)) {
            this.taskTags.set(taskId, []);
        }
        const tags = this.taskTags.get(taskId);
        if (!tags.includes(tag)) {
            tags.push(tag);
        }
    }
    removeTag(taskId, tag) {
        const tags = this.taskTags.get(taskId);
        if (!tags)
            return;
        this.taskTags.set(taskId, tags.filter(t => t !== tag));
    }
    getTags(taskId) {
        var _a;
        return (_a = this.taskTags.get(taskId)) !== null && _a !== void 0 ? _a : [];
    }
    getTasksByTag(tag) {
        const result = [];
        for (const [taskId, tags] of this.taskTags.entries()) {
            if (tags.includes(tag)) {
                result.push(taskId);
            }
        }
        return result;
    }
}
