export class WatcherSystem {
    constructor() {
        this.watchers = new Map();
    }
    watch(target, user) {
        const existingWatchers = this.watchers.get(target);
        if (!existingWatchers) {
            this.watchers.set(target, [user]);
            return;
        }
        if (!existingWatchers.includes(user)) {
            existingWatchers.push(user);
        }
    }
    unwatch(target, user) {
        const existingWatchers = this.watchers.get(target);
        if (!existingWatchers)
            return;
        const filteredWatchers = existingWatchers.filter(u => u !== user);
        if (filteredWatchers.length === 0) {
            this.watchers.delete(target);
        }
        else {
            this.watchers.set(target, filteredWatchers);
        }
    }
    getWatchers(target) {
        var _a;
        return (_a = this.watchers.get(target)) !== null && _a !== void 0 ? _a : [];
    }
}
