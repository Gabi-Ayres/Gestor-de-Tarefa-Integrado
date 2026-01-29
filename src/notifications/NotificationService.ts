// Aula 4 - Exercício 10: Sistema de notificações
export class NotificationService {
    notifyUser(userId: number, message: string): void {
        console.log(`👤 Utilizador #${userId}: ${message}`);
    }

    notifyGroup(userIds: number[], message: string): void {
        userIds.forEach(userId => {
            this.notifyUser(userId, message);
        });
    }

    notifyAdmins(message: string): void {
        console.log(`👑 ADMINS: ${message}`);
    }
}
