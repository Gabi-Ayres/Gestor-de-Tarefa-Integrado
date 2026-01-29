// Aula 4 - Exercício 9: Histórico de alterações
export class HistoryLog {
    private logs: string[] = [];

    addLog(message: string): void {
        const timestamp = new Date().toLocaleString('pt-PT');
        this.logs.push(`[${timestamp}] ${message}`);
    }

    getLogs(): string[] {
        return [...this.logs];
    }

    clearLogs(): void {
        this.logs = [];
    }
}
