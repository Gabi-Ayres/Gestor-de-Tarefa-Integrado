export class DependencyGraph<T> {
    private graph: Map<T, T[]> = new Map();

    addDependency(item: T, dependsOn: T): void {
        const existingDeps = this.graph.get(item);

        if (!existingDeps) {
            this.graph.set(item, [dependsOn]);
            return;
        }

        if (!existingDeps.includes(dependsOn)) {
            existingDeps.push(dependsOn);
        }
    }

    getDependencies(item: T): T[] {
        return this.graph.get(item) ?? [];
    }

    hasDependencies(item: T): boolean {
        const deps = this.graph.get(item);
        return deps !== undefined && deps.length > 0;
    }
}
