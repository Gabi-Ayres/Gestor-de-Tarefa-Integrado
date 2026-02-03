export class SystemLogger {
    private static logs: string[] = []

    private constructor() {}


    
    static log(message: string): void {
        this.logs.push(message);

    }

    static getLogs(): string[] {
        return [...this.logs];

    }

    static clear(): void{
        this.logs = [];

    }
}