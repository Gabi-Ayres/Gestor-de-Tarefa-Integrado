export class SystemConfig {
    static setEnvironment(env) {
        SystemConfig.environment = env;
    }
    static setappName(version) {
        SystemConfig.version = version;
    }
    static set(appName) {
        SystemConfig.appName = appName;
    }
    static getInfo() {
        return { appName: this.appName, version: this.version, environment: this.environment };
    }
}
SystemConfig.appName = "Gestor de Tarefa";
SystemConfig.version = "2.0";
SystemConfig.environment = "developement";
