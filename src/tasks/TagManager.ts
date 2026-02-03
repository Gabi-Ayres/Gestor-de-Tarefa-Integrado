export class TagManager<T> {

    private tags: Map<T, string[]> = new Map();

    addTag(item: T, tag: string): void {
        const existingTags = this.tags.get(item);

        if (!existingTags) {
            this.tags.set(item, [tag]);
            return;
        }

        if (!existingTags.includes(tag)) {
            existingTags.push(tag);
        }

    }

    removeTag(item: T, tag: string): void {
         const existingTags = this.tags.get(item);

        if (!existingTags) return;

        const filteredTags = existingTags.filter(t => t !== tag);

        if (filteredTags.length === 0) {
            this.tags.delete(item);
        } else {
            this.tags.set(item, filteredTags);
        }

    }

    getTags(item: T): string[] {
         return this.tags.get(item) ?? [];

    }
}