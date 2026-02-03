export class WatcherSystem<T, U> {
    private watchers: Map<T, U[]> = new Map();

    watch(target: T, user: U): void {
        const existingWatchers = this.watchers.get(target);

        if (!existingWatchers) {
            this.watchers.set(target, [user]);
            return;
        }

        if (!existingWatchers.includes(user)) {
            existingWatchers.push(user);
        }
    }

    unwatch(target: T, user: U): void {
        const existingWatchers = this.watchers.get(target);

        if (!existingWatchers) return;

        const filteredWatchers = existingWatchers.filter(u => u !== user);

        if (filteredWatchers.length === 0) {
            this.watchers.delete(target);
        } else {
            this.watchers.set(target, filteredWatchers);
        }
    }

    getWatchers(target: T): U[] {
        return this.watchers.get(target) ?? [];
    }
}
