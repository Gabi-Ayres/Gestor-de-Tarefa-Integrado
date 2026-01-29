// Aula 4 - Exercício 9: Histórico de alterações
export class HistoryLog {
    constructor() {
        this.logs = [];
    }
    addLog(message) {
        const timestamp = new Date().toLocaleString('pt-PT');
        this.logs.push(`[${timestamp}] ${message}`);
    }
    getLogs() {
        return [...this.logs];
    }
    clearLogs() {
        this.logs = [];
    }
}
