export class SystemConfig {
private static appName: string = "Gestor de Tarefa";
private static version: string = "2.0"
private static environment: string = "developement"

    static setEnvironment(env: string): void { // como está usando private não precisaria usar os set pois os dados não serão modificados.
        SystemConfig.environment = env;
    }
    
    static setappName(version: string): void {
         SystemConfig.version = version;
    }

    static set(appName: string): void {
        SystemConfig.appName = appName;
    }

        
    static getInfo(): { appName: string; version: string; environment: string } {
    return {appName: this.appName, version: this.version, environment: this.environment}
    }
}
