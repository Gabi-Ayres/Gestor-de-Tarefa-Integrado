export class SearchService {
    constructor(tasks) {
        this.tasks = tasks;
    }
    searchByTitle(text) {
        const lowerText = text.toLowerCase();
        return this.tasks.filter(task => task.title.toLowerCase().includes(lowerText));
    }
    searchByUser(userId) {
        return this.tasks.filter(task => task.assignedTo === userId);
    }
    searchByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
    globalSearch(query) {
        const results = [];
        if (query.text) {
            results.push(...this.searchByTitle(query.text));
        }
        if (query.userId !== undefined) {
            results.push(...this.searchByUser(query.userId));
        }
        if (query.status) {
            results.push(...this.searchByStatus(query.status));
        }
        // remover duplicados pelo id da task
        const uniqueMap = new Map();
        for (const task of results) {
            uniqueMap.set(task.id, task);
        }
        return Array.from(uniqueMap.values());
    }
}
