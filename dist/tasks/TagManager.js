export class TagManager {
    constructor() {
        this.tags = new Map();
    }
    addTag(item, tag) {
        const existingTags = this.tags.get(item);
        if (!existingTags) {
            this.tags.set(item, [tag]);
            return;
        }
        if (!existingTags.includes(tag)) {
            existingTags.push(tag);
        }
    }
    removeTag(item, tag) {
        const existingTags = this.tags.get(item);
        if (!existingTags)
            return;
        const filteredTags = existingTags.filter(t => t !== tag);
        if (filteredTags.length === 0) {
            this.tags.delete(item);
        }
        else {
            this.tags.set(item, filteredTags);
        }
    }
    getTags(item) {
        var _a;
        return (_a = this.tags.get(item)) !== null && _a !== void 0 ? _a : [];
    }
}
