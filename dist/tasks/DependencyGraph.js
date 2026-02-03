export class DependencyGraph {
    constructor() {
        this.graph = new Map();
    }
    addDependency(item, dependsOn) {
        const existingDeps = this.graph.get(item);
        if (!existingDeps) {
            this.graph.set(item, [dependsOn]);
            return;
        }
        if (!existingDeps.includes(dependsOn)) {
            existingDeps.push(dependsOn);
        }
    }
    getDependencies(item) {
        var _a;
        return (_a = this.graph.get(item)) !== null && _a !== void 0 ? _a : [];
    }
    hasDependencies(item) {
        const deps = this.graph.get(item);
        return deps !== undefined && deps.length > 0;
    }
}
